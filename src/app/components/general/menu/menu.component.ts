import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations'
import {FormControl} from '@angular/forms';
import {LanguageService} from 'src/app/services/language/language.service';
import {ThemeService} from "../../../services/theme/theme.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";

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
    scrollPosition = 0;

    constructor(
        private router: Router,
        private languageService: LanguageService,
        public themeService: ThemeService,
        public ga: AnalyticsService
    ) {
    }

    ngOnInit(): void {
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
            this.ga.sendAnalyticEvent('view-resume', 'menu', 'click');
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
        this.themeService.switchTheme();
    }

    @HostListener('window:scroll')
    checkScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
}
