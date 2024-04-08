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
            await this.createLine(`last login: ${new Date().toLocaleString()}`, '', true);
            await this.createLine('in /users/arun-varghese', '', true);
            await this.createLine('executing ~/avarghese.sh', '', true);
            await this.displayHelp();
            await this.wait(50);
            this.waitForInput = true;
        }
    }

    @HostListener('window:click', ['$event.target'])
    async click(element: HTMLElement) {
        if (element.classList.contains('t-view-link')) {
            this.input.value = `view ${element.innerText}`;
            await this.inputActive();
        }
        if (element.classList.contains('t-help-command')) {
            this.input.value = `${element.innerText}`;
            await this.inputActive();
        }
    }

    @HostListener('window:keyup', ['$event'])
    async submitInput(event: KeyboardEvent) {
        if (this.terminal && event.key == 'Enter') {
            await this.checkInputValue(this.input?.value?.toLowerCase()?.trim() || '');
            await this.inputActive();
            localStorage.setItem('terminal-history', JSON.stringify(this.lines));
        }
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
        if(this.loading) {
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

    async createLine(text: string,
                     level: 't-success' | 't-warn' | 't-error' | '',
                     noCursor = false,
                     clear = false,
                     delay = 50) {
        await this.wait(delay);
        if(clear){
            this.clearInput();
        }
        this.lines.push(`<span class='${level}'>${noCursor ? '' : '$'} ${text} </span>`);
        this.anchor?.scrollIntoView();
    }

    async createHelpLine(command, desc, delay = 50) {
        await this.wait(delay);
        this.lines.push(`<div class='t-blue t-tab-1 t-help-command'>${command}</div><span> ${desc} </span>`);
        this.anchor?.scrollIntoView();
    }

    async createContactLine(link, icon, label, delay = 50) {
        await this.wait(delay);
        this.lines.push(`<a href='${link}' target='_blank' class="t-tab-1"><i class='${icon} white'></i>&nbsp;${label}</a>`);
        this.anchor?.scrollIntoView();
    }

    async createNavigationLine(link, delay = 50) {
        await this.wait(delay);
        this.lines.push(`<a class='t-view-link t-tab-1'>${link}</a>`);
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
        await this.createLine('usage:', '', true, false, 100);
        await this.createHelpLine('help', 'commands');
        await this.createHelpLine('about', 'who am i');
        await this.createHelpLine('contact', 'contact me');
        await this.createHelpLine('view', 'view &lt;page&gt;');
        await this.createHelpLine('theme', 'toggle theme');
        await this.createHelpLine('version', 'view version');
        await this.createHelpLine('clear', 'clear terminal');
        await this.createHelpLine('exit', 'close terminal');
    }

    async checkInputValue(value: string) {
        if (value === 'help') {
            await this.createLine(value, 't-success', false, true);
            await this.displayHelp();
        } else if (value === 'about') {
            await this.displayLoading();
            await this.createLine(value, 't-success', false, true);
            await this.createLine('hi, my name is <span class="t-blue">arun</span>', '', true)
            await this.createLine('i have over 10 years of full-stack experience in the complete ' +
                'development life cycle of distributed web applications, from design to delivery.', '', true);
            await this.createLine('in my free time, I work on front-end web development with popular ' +
                'frameworks to learn more about ui/ux and software architecture', '', true);
        } else if (value === 'view') {
            await this.displayLoading();
            await this.createLine(value, 't-success', false, true);
            await this.createLine('choose page:', '', true);
            await this.createNavigationLine('highlights');
            await this.createNavigationLine('experience');
            await this.createNavigationLine('projects');
            await this.createNavigationLine('resume');
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
            await this.createLine(value, 't-success', false, true);
            this.languageService.translateService.get("Resume").subscribe(val => {
                window.open(val, "_blank");
            });
        } else if (value === 'contact') {
            await this.displayLoading();
            await this.createLine(value, 't-success', false, true);
            await this.createContactLine('mailto:arunv4700@gmail.com', 'fas fa-envelope', 'email');
            await this.createContactLine('https://www.linkedin.com/in/varghesearun', 'fab fa-linkedin', 'linkedin');
            await this.createContactLine('https://github.com/vararun', 'fab fa-github', 'github');
            await this.createContactLine('https://codepen.io/avarghese', 'fab fa-codepen', 'codepen');
            await this.createContactLine('https://www.instagram.com/chasing_arun', 'fab fa-instagram white', 'instagram');
        } else if (value.startsWith('exit')) {
            await this.displayLoading();
            await this.createLine(value, 't-error', false, true);
            this.navigate('home');
        } else if (value.startsWith('clear')) {
            await this.createLine(value, 't-success');
            await this.clearTerminal();
        } else if (value === '') {
            await this.createLine('', '', false, true);
        } else if (value.startsWith('theme')) {
            await this.displayLoading();
            this.themeService.switchTheme();
            await this.createLine(value, 't-success', false, true);
            await this.createLine(`switched to ${this.themeService.theme} theme`, '', true);
        } else if (value.startsWith('ls')) {
            await this.createLine(value, '', false, true);
            await this.createLine('avarghese.sh', '', true);
        } else if (value.startsWith('version')) {
            await this.createLine(value, 't-success', false, true);
            await this.createLine(this.appVersion, '', true);
        } else if (value.startsWith('pwd')) {
            await this.createLine(value, 't-success', false, true);
            await this.createLine('/users/arun-varghese', '', true);
        } else if (value.startsWith('df')) {
            await this.createLine(value, 't-success', false, true);
            await this.createLine('Filesystem       Used         Available', '', true);
            await this.createLine('/dev/disk1       4096         487159632', '', true);
        }  else if (value.startsWith('echo')) {
            await this.createLine(value, 't-success', false, true);
            await this.createLine(value.split('echo')[1], '', true);
        } else if (value.startsWith('mkdir') || value.startsWith('rm') || value.startsWith('chmod') || value.startsWith('sudo') || value.startsWith('cd')) {
            await this.createLine(value, '', false, true);
            await this.createLine('permission denied', 't-warn', true);
        } else {
            await this.createLine(value, 't-error', false, true);
            await this.createLine(`command not found: ${value}`, '', true);
        }
    }
}
