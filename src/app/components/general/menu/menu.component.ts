import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations'
import {FormControl} from '@angular/forms';
import {LanguageService} from 'src/app/services/language/language.service';
import * as config from "../../../../environments/environment";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [
        trigger(
            'hide-animation',
            [
                transition(
                    ':leave',
                    [
                        style({opacity: 1}),
                        animate('.2s ease-out',
                            style({opacity: 0}))
                    ]
                )
            ]
        )
    ]
})
export class MenuComponent implements OnInit {

    menuOpen = false;
    languageFormControl: FormControl = new FormControl();
    fileName = '';
    route = '';
    theme;
    scrollPosition = 0;

    constructor(
        private router: Router,
        private languageService: LanguageService
    ) {
    }

    ngOnInit(): void {
        this.theme = document.body.getAttribute('data-theme') || 'dark';
        this.languageFormControl.setValue(this.languageService.DEFAULT);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.route = event.url.split('/')[1] || 'home';
            }
        });
    }

    toggleOverlayMenu() {
        this.menuOpen = !this.menuOpen;
        this.menuOpen ? document.body.classList.add('scroll-lock') : document.body.classList.remove('scroll-lock');
    }

    navigate(item) {
        if (item['Label'] === 'Resume') {
            this.downloadResume();
        }
        this.router.navigate([item['Link']]);
        document.body.classList.remove('scroll-lock');
    }

    downloadResume() {
        this.languageService.translateService.get("Resume").subscribe(val => {
            window.open(val, "_blank");
        })
    }

    switchTheme() {
        this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        document.body.classList.remove('scroll-lock');
    }

    @HostListener('window:scroll')
    checkScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    get appVersion() {
        return config.environment.version;
    }
}
