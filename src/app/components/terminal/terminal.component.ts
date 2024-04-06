import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LanguageService} from "../../services/language/language.service";


@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TerminalComponent implements OnInit {
    terminal: Element | null = null;
    lines: string[] = [];
    waitForInput = false;

    constructor(private router: Router, private languageService: LanguageService) {
    }

    async ngOnInit() {
        this.terminal = document.querySelector('#terminal');
        if (this.terminal) {
            this.terminal.addEventListener('click', function () {
                const input: HTMLInputElement | null = document.querySelector('.t-input');
                if (input) {
                    input.focus();
                }
            });
            this.openTerminal();
        }
    }

    @HostListener('window:keyup', ['$event'])
    async keyEvent(event: KeyboardEvent) {
        if (event.key == 'Enter') {
            const value = this.input?.value;
            this.waitForInput = false;
            this.clearInput();
            this.checkInputValue(value?.toLowerCase() || '');
            this.waitForInput = true;
            this.input?.focus()
        }
        if (this.terminal) {
            this.terminal.scrollTop = this.terminal.scrollHeight + 100;
        }
    }

    clearInput() {
        if (this.input?.value) {
            this.input.value = '';
        }
    }

    get input() {
        return document.querySelector('input');
    }

    createNewLine() {
        this.lines.push('<br>');
    }

    createLine(text: string) {
        this.lines.push(text);
    }

    createSuccessLine(text: string) {
        this.lines.push(`<span class='t-green'>$ ${text} </span>`);
        this.createNewLine();
    }

    createErrorLine(text: string) {
        this.lines.push(`<span class='t-red'>$ ${text} </span>`);
    }

    createHelpLine(command, desc) {
        this.lines.push(`<div class='t-blue t-tab-1 t-help-command'>${command}</div><span> ${desc} </span>`);
    }


    createCode(code, text) {
        this.lines.push(`<span class="t-blue">${code}</span><br/><span class='t-text'> ${text} </span>`);
    }

    openTerminal() {
        this.createLine(`last login: ${new Date().toLocaleString()}`);
        this.createLine('# in /users/arun-varghese');
        this.createCode('here are some commands you can run:', 'help | clear | exit');
        this.createNewLine();
        this.waitForInput = true;
    }

    checkInputValue(value: string) {
        if (value === 'help') {
            this.createSuccessLine(value);
            this.createLine('usage:');
            this.createHelpLine('about', 'who am I');
            this.createHelpLine('contact', 'how to contact me');
            this.createHelpLine('open', 'open &lt;page&gt;');
            this.createHelpLine('clear', 'clear terminal');
            this.createHelpLine('exit', 'close terminal');
            this.createNewLine();
        } else if (value === 'about') {
            this.createSuccessLine(value);
            this.createLine('Hi, my name is Arun')
            this.createLine('I have over 10 years of full-stack experience in the complete development life cycle of distributed web applications, from design to delivery. In my free time, I work on front-end web development with popular frameworks to learn more about UI/UX and Software Architecture');
            this.createNewLine();
        } else if (value === 'open') {
            this.createErrorLine(value);
            this.createNewLine();
            this.createLine('must provide page: &lt; projects | resume&gt;');
            this.createLine('example:');
            this.createHelpLine('open projects', 'open projects page');
            this.createNewLine();
        } else if (value === 'open projects') {
            this.navigate('projects');
        } else if (value === 'open resume') {
            this.createSuccessLine(value);
            this.languageService.translateService.get("Resume").subscribe(val => {
                window.open(val, "_blank");
            });
        } else if (value === 'contact') {
            this.createSuccessLine(value);
            this.createLine('<a href=\'https://github.com/vararun\' target=\'_blank\'><i class=\'fab fa-github white\'></i> github.com/vararun</a>');
            this.createLine('<a href=\'mailto:arunv4700@gmail.com\' target=\'_blank\'><i class=\'fas fa-envelope white\'></i> arunv4700@gmail.com</a>');
            this.createLine('<a href=\'https://codepen.io/avarghese/\' target=\'_blank\'><i class=\'fab fa-codepen\'></i> codepen.io/avarghese</a>');
            this.createLine('<a href=\'https://www.instagram.com/chasing_arun/\' target=\'_blank\'><i class=\'fab fa-instagram white\'></i> instagram.com/chasing_arun</a>');
            this.createNewLine();
        } else if (value === 'exit') {
            this.createErrorLine(value);
            this.navigate('home');
        } else if (value === 'clear') {
            this.createSuccessLine(value);
            this.waitForInput = false;
            this.lines = [];
            this.createCode('here are some commands you can run:', 'help | clear | exit');
            this.waitForInput = true;
            this.createNewLine();
        } else if (value === '') {
            this.createLine('$');
            return;
        } else {
            this.createErrorLine(value);
            this.createLine(`command not found: ${value}`)
            this.createNewLine();
        }
    }

    navigate(item) {
        this.router.navigate([item]);
    }
}
