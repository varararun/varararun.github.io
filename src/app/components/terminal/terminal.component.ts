import {Component, HostListener, OnInit, VERSION, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LanguageService} from "../../services/language/language.service";
import * as config from "../../../environments/environment";
import {ThemeService} from "../../services/theme/theme.service";
import {AnalyticsService} from "../../services/analytics/analytics.service";


@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TerminalComponent implements OnInit {
    lines: string[] = [];
    previousInputList: string[] = [];
    waitForInput = false;
    fullscreen = false;
    loading = true;
    cursor = 0;
    inputMap = {};

    constructor(private router: Router,
                private languageService: LanguageService,
                private themeService: ThemeService,
                private ga: AnalyticsService) {
    }

    async ngOnInit() {
        if (this.terminal) {
             this.languageService.translateService.get("Terminal").subscribe(val => {
                 this.inputMap = val;
            });
            await this.displayLoading(1000);
            this.lines = JSON.parse(localStorage.getItem('av-terminal-history') || '[] ');
            await this.displayInit();
        }
    }

    @HostListener('window:click', ['$event.target'])
    async click(element: HTMLElement) {
        if (element.classList.contains('t-view-command')) {
            this.input.value = `${element.innerText}`;
            await this.inputActive();
        }
        if (element.classList.contains('t-help-command')) {
            this.input.value = `${element.innerText}`;
            await this.inputActive();
        }
        if (element.classList.contains('t-previous-input') && element.classList.contains('t-success')) {
            this.input.value = `${element.innerText.replace('$', '').trim()}`;
            await this.inputActive();
        }
        if (element.id === 'terminal-input' && this.input?.value?.trim()) {
            await this.executeInput();
        }
    }

    @HostListener('window:keyup', ['$event'])
    async submitInput(event: KeyboardEvent) {
        if (this.terminal && event.key == 'Enter') {
            await this.executeInput();
        }

        if (this.terminal && event.key == 'ArrowUp') {
            this.input.value = this.cursor > 0 ? this.previousInputList[--this.cursor] : '';
            await this.inputActive();
        }

        if (this.terminal && event.key == 'ArrowDown') {
            this.input.value = this.cursor < this.previousInputList.length ? this.previousInputList[this.cursor++] : '';
            await this.inputActive();
        }

    }

    async executeInput() {
        if(this.input?.value?.toLowerCase()?.trim()) {
            this.previousInputList.push(this.input?.value?.toLowerCase()?.trim());
            this.cursor = this.previousInputList.length;
        }
        await this.checkInputValue(this.input?.value?.toLowerCase()?.trim() || '');
        await this.inputActive();
        localStorage.setItem('av-terminal-history', JSON.stringify(this.lines));
    }

    async displayInit() {
        this.createNewLine();
        await this.createLines([
            `last login: ${new Date().toLocaleString()}`,
            'in /users/arun-varghese',
            'executing ~/avarghese.sh',
            `version: ${this.appVersion}`,
            '<br>',
            'type <span class="t-success">help</span> to view available commands'
        ]);
        this.createNewLine();
        await this.inputActive();
    }

    async displayLoading(delay = 500) {
        this.loading = true;
        await this.wait(100);
        this.anchor?.scrollIntoView();
        await this.wait(delay);
        this.loading = false;
    }

    clearInput() {
        if (this.input?.value) {
            this.input.value = '';
        }
        this.waitForInput = false;
    }

    async inputActive() {
        if (this.loading) {
            return;
        }
        this.waitForInput = true;
        await this.wait(100);
        if (this.input && this.anchor) {
            this.input.focus();
            await this.wait(100);
            this.anchor?.scrollIntoView();
        }
    }

    get terminal() {
        return document.getElementById('terminal');
    }

    get input() {
        return document.getElementById('terminal-input') as HTMLInputElement;
    }

    get anchor() {
        return document.getElementById('anchor');
    }

    createNewLine() {
        this.lines.push('<br>');
    }

    async addLine(line, delay = 50) {
        await this.wait(delay);
        this.lines.push(line);
        this.anchor?.scrollIntoView();
    }

    async createLines(input: string[] | string) {
        const lines = typeof input === 'string' ? [input] : input;
        for (const line of lines) {
           await this.addLine(line);
        }
    }

    async createHelpLine(commands: string[][]) {
        for (const command of commands) {
            await this.addLine(`<span class='t-help-command'>${command[0]}</span>${command[1] || ''}`);
        }
    }

    async createContactLines(lines: string[][]) {
        for (const line of lines) {
            await this.addLine(`<a href='${line[0]}' target='_blank'">&nbsp; <i class='${line[1]} white'></i>&nbsp;${line[2]}</a>`);
        }
    }

    async createNavigationLine(views: string[]) {
        for (const view of views) {
            await this.addLine(`<span class='t-view-command'>view ${view}</span>`);
        }
    }

    async createPreviousInput(command, level: 't-success' | 't-warn' | 't-error' | '', delay = 50) {
        await this.wait(delay);
        this.clearInput();
        this.lines.push(`$ <span class='${level} t-previous-input'>${command}</span>`);
        this.anchor?.scrollIntoView();
    }

    navigate(item) {
        this.router.navigate([item]);
    }

    async clearTerminal() {
        this.clearInput();
        this.lines = [];
        await this.createLines('type <span class="t-success">help</span> to view available commands');
        this.createNewLine();
        await this.inputActive();
    }

    get appVersion() {
        return config.environment.version;
    }

    wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    async displayHelp() {
        await this.createPreviousInput('help', 't-success');
        await this.displayLoading();
        this.createNewLine();
        await this.createLines(this.inputMap['help.prompt']);
        await this.createHelpLine(this.inputMap['help.commands']);
        this.createNewLine();
    }

    async displayMore() {
        await this.createPreviousInput('more', 't-success');
        await this.displayLoading();
        this.createNewLine();
        await this.createLines(this.inputMap['more.prompt']);
        await this.createHelpLine(this.inputMap['more.commands']);
        this.createNewLine();
    }

    async displayView() {
        await this.createPreviousInput('view', 't-success');
        await this.displayLoading();
        this.createNewLine();
        await this.createLines(this.inputMap['view.prompt']);
        await this.createNavigationLine(this.inputMap['view.pages']);
        this.createNewLine();
    }

    async displayAbout() {
        await this.createPreviousInput('about', 't-success');
        await this.displayLoading();
        this.createNewLine();
        await this.createLines(this.inputMap['about']);
        this.createNewLine();
    }

    async displayContact() {
        await this.createPreviousInput('contact', 't-success');
        await this.displayLoading();
        this.createNewLine();
        await this.createContactLines(this.inputMap['contact']);
        this.createNewLine();
    }

    async checkInputValue(value: string) {
        if (value.match(/help/g)) {
            await this.displayHelp();
        } else if (value === 'more') {
            await this.displayMore();
        } else if (value === 'about') {
            await this.displayAbout();
        } else if (value === 'view') {
            await this.displayView();
        } else if (value === 'view highlights') {
            await this.displayLoading();
            this.navigate('highlights');
        } else if (value === 'view experience') {
            await this.displayLoading();
            this.navigate('experience');
        } else if (value === 'view projects') {
            await this.displayLoading();
            this.navigate('projects');
        } else if (value === 'view resume') {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading();
            this.languageService.translateService.get("Resume").subscribe(val => {
                window.open(val, "_blank");
            });
            this.createNewLine();
        } else if (value === 'source') {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading();
            this.languageService.translateService.get("Repo").subscribe(val => {
                window.open(val, "_blank");
            });
            this.createNewLine();
        } else if (value === 'contact') {
            await this.displayContact();
        } else if (value.startsWith('exit')) {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading();
            this.navigate('home');
        } else if (value.startsWith('clear')) {
            await this.createPreviousInput(value, 't-success');
            await this.clearTerminal();
        } else if (value === '') {
            await this.createPreviousInput(value, '');
        } else if (value.startsWith('theme')) {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading(1000);
            this.createNewLine();
            await this.createLines(`&nbsp; => switched to ${this.themeService.theme} theme`);
            this.themeService.switchTheme();
            this.createNewLine();
        } else if (value.startsWith('fullscreen')) {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading();
            this.fullscreen = !this.fullscreen;
            this.createNewLine();
        } else if (value.startsWith('analytics')) {
            await this.createPreviousInput(value, 't-success');
            await this.displayLoading(1000);
            this.createNewLine();
            await this.createLines([
                'views:',
                ...Object.entries(this.ga.localPageViews)
                    .sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0)
                    .map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`),
                'events:',
                ...Object.entries(this.ga.localEvents)
                    .sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0)
                    .map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`)
            ]);
            this.createNewLine();
        } else if (value.startsWith('version')) {
            await this.createPreviousInput(value, 't-success');
            this.createNewLine();
            await this.createLines(`&nbsp; app => ${this.appVersion}`);
            await this.createLines(`&nbsp; angular => ${VERSION.full}`);
            this.createNewLine();
        } else if (value.startsWith('ls')) {
            await this.createPreviousInput(value, '');
            await this.createLines(this.inputMap['ls']);
        } else if (value.startsWith('pwd')) {
            await this.createPreviousInput(value, '');
            await this.createLines(this.inputMap['pwd']);
        } else if (value.startsWith('df')) {
            await this.createPreviousInput(value, '');
            await this.createLines(this.inputMap['df']);
        } else if (value.startsWith('echo ')) {
            await this.createPreviousInput(value, '');
            await this.createLines(value.split('echo')[1]);
        } else if (value.match(/(mkdir|mkfile|rm|chmod|sudo|cd|vi|cat|touch)/g)) {
            await this.createPreviousInput(value, '');
            await this.createLines('permission denied');
        } else {
            await this.createPreviousInput(value, 't-error');
        }
    }
}
