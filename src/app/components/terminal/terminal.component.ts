import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LanguageService} from "../../services/language/language.service";
import * as config from "../../../environments/environment";
import {ThemeService} from "../../services/theme/theme.service";


@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TerminalComponent implements OnInit {
    lines: string[] = [];
    waitForInput = false;
    fullscreen = false;
    loading = true;

    constructor(private router: Router, private languageService: LanguageService, private themeService: ThemeService) {
    }

    async ngOnInit() {
        if (this.terminal) {
            await this.displayLoading(1000);
            this.lines = JSON.parse(localStorage.getItem('terminal-history') || '[] ');
            await this.displayInit();
        }
    }

    @HostListener('window:click', ['$event.target'])
    async click(element: HTMLElement) {
        if (element.classList.contains('t-view-command')) {
            this.input.value = `view ${element.innerText}`;
            await this.inputActive();
        }
        if (element.classList.contains('t-help-command')) {
            this.input.value = `${element.innerText}`;
            await this.inputActive();
        }
        if (element.classList.contains('t-previous-input')) {
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

    }

    async executeInput() {
        await this.checkInputValue(this.input?.value?.toLowerCase()?.trim() || '');
        await this.inputActive();
        localStorage.setItem('terminal-history', JSON.stringify(this.lines));
    }

    async displayInit() {
        this.createNewLine();
        await this.createLines([
            `last login: ${new Date().toLocaleString()}`,
            'in /users/arun-varghese',
            'executing ~/avarghese.sh',
            `version: ${this.appVersion}`
        ]);
        await this.displayHelp();
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
            await this.addLine(`<span class='t-view-command'>${view}</span>`);
        }
    }

    async createPreviousInput(command, level: 't-success' | 't-warn' | 't-error' | '', delay = 50) {
        await this.wait(delay);
        this.clearInput();
        this.lines.push(`<span class='${level} t-previous-input'>$ ${command}</span>`);
        this.anchor?.scrollIntoView();
    }

    navigate(item) {
        this.router.navigate([item]);
    }

    exitTerminal() {
        this.router.navigate(['home']);
    }

    async clearTerminal() {
        this.clearInput();
        this.lines = [];
        await this.inputActive();
    }

    get appVersion() {
        return config.environment.version;
    }

    wait = ms => new Promise(resolve => setTimeout(resolve, ms))

    async displayHelp() {
        await this.displayLoading();
        this.createNewLine();
        await this.createLines('usage:');
        await this.createHelpLine([
            ['help'], ['about'], ['contact'],
            ['view', 'website pages'],
            ['theme', 'toggle themes'],
            ['fullscreen', 'toggle modes'],
            ['clear'], ['exit']
        ]);
        this.createNewLine();
    }

    async displayView() {
        await this.displayLoading();
        this.createNewLine();
        await this.createLines('choose page:');
        await this.createNavigationLine(['highlights', 'experience', 'projects', 'resume']);
        this.createNewLine();
    }

    async displayAbout() {
        await this.displayLoading();
        this.createNewLine();
        await this.createLines([
            'hi, my name is arun',
            'i have over 10 years of full-stack experience in the complete ' +
            'development life cycle of distributed web applications, from design to delivery.',
            'in my free time, I work on front-end web development with popular ' +
            'frameworks to learn more about ui/ux and software architecture'
        ]);
        this.createNewLine();
    }

    async displayContact() {
        await this.displayLoading();
        this.createNewLine();
        await this.createContactLines([
            ['mailto:arunv4700@gmail.com', 'fas fa-envelope', 'email'],
            ['https://www.linkedin.com/in/varghesearun', 'fab fa-linkedin', 'linkedin'],
            ['https://github.com/vararun', 'fab fa-github', 'github'],
            ['https://codepen.io/avarghese', 'fab fa-codepen', 'codepen'],
            ['https://www.instagram.com/chasing_arun', 'fab fa-instagram white', 'instagram']
        ]);
        this.createNewLine();
    }

    async checkInputValue(value: string) {
        if (value === 'help') {
            await this.createPreviousInput(value, 't-success');
            await this.displayHelp();
        } else if (value === 'about') {
            await this.createPreviousInput(value, 't-success');
            await this.displayAbout();
        } else if (value === 'view') {
            await this.createPreviousInput(value, 't-success');
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
            await this.displayLoading();
            await this.createPreviousInput(value, 't-success');
            this.languageService.translateService.get("Resume").subscribe(val => {
                window.open(val, "_blank");
            });
        } else if (value === 'contact') {
            await this.createPreviousInput(value, 't-success');
            await this.displayContact();
        } else if (value.startsWith('exit')) {
            await this.displayLoading();
            await this.createPreviousInput(value, 't-error');
            this.navigate('home');
        } else if (value.startsWith('clear')) {
            await this.createPreviousInput(value, 't-success');
            await this.clearTerminal();
        } else if (value === '') {
            await this.createPreviousInput(value, '');
        } else if (value.startsWith('theme')) {
            await this.displayLoading();
            await this.createPreviousInput(value, 't-success');
            this.createNewLine();
            await this.createLines(`&nbsp; => switched to ${this.themeService.theme} theme`);
            this.themeService.switchTheme();
            this.createNewLine();
        } else if (value.startsWith('fullscreen')) {
            await this.displayLoading();
            await this.createPreviousInput(value, 't-success');
            this.fullscreen = !this.fullscreen;
            this.createNewLine();
        } else if (value.startsWith('version')) {
            await this.createPreviousInput(value, 't-success');
            this.createNewLine();
            await this.createLines(`&nbsp; => ${this.appVersion}`);
            this.createNewLine();
        } else if (value.startsWith('ls')) {
            await this.createPreviousInput(value, '');
            await this.createLines('avarghese.sh');
        } else if (value.startsWith('pwd')) {
            await this.createPreviousInput(value, 't-success');
            await this.createLines('/users/arun-varghese');
        } else if (value.startsWith('df')) {
            await this.createPreviousInput(value, 't-success');
            await this.createLines([
                'Filesystem       Used         Available',
                '/dev/disk1       4096         487159632'
            ]);
        } else if (value.startsWith('echo')) {
            await this.createPreviousInput(value, 't-success');
            await this.createLines(value.split('echo')[1]);
        } else if (value.startsWith('mkdir') || value.startsWith('rm') || value.startsWith('chmod') || value.startsWith('sudo') || value.startsWith('cd')) {
            await this.createPreviousInput(value, '');
            await this.createLines('permission denied');
        } else {
            await this.createPreviousInput(value, 't-error');
            await this.createLines(`command not found: ${value}`);
        }
    }
}
