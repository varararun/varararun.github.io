import {Component, HostListener, OnInit, inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations'
import {FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {LanguageService} from 'src/app/services/language/language.service';
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
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
    private router = inject(Router);
    private languageService = inject(LanguageService);
    ga = inject(AnalyticsService);

    ngOnInit(): void {
        this.languageFormControl.setValue(this.languageService.DEFAULT);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.route = event.urlAfterRedirects.split('/')[1] || 'home';
            }
        });
    }

    toggleOverlayMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');
        }
    }

    navigate(item) {
        if (item['Label'] === 'Resume') {
            this.ga.sendAnalyticEvent('view-resume', 'menu', 'click');
            this.downloadResume();
        } else {
            this.router.navigate([item['Link']]);
        }
        this.menuOpen = false
        document.body.classList.remove('scroll-lock');
    }

    downloadResume() {
        this.languageService.translateService.get("Resume").subscribe(val => {
            window.open(val, "_blank");
        })
    }

    @HostListener('window:scroll')
    checkScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
}
