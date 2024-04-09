import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Meta, Title} from '@angular/platform-browser';
import * as config from "../environments/environment";
import {NavigationEnd, Router} from "@angular/router";
import {AnalyticsService} from "./services/analytics/analytics.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Arun Varghese';

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router,
        private ga: AnalyticsService
    ) {
    }

    ngOnInit(): void {
        document.body.setAttribute('data-theme', localStorage.getItem('av-theme') || config.environment.theme);
        this.titleService.setTitle("Arun Varghese | Software Engineer");
        this.metaService.addTag({name: 'appVersion', id: config.environment.version});

        AOS.init();

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.ga.sendAnalyticPageView(event.urlAfterRedirects, event.urlAfterRedirects.replace('/', ''));
            }
        });
    }
}
