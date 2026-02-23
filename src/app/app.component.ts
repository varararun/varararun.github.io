import {Component, OnInit, inject} from '@angular/core';
import * as AOS from 'aos';
import {Meta, Title} from '@angular/platform-browser';
import * as config from "../environments/environment";
import {NavigationEnd, Router} from "@angular/router";
import { RouterOutlet } from '@angular/router';
import {AnalyticsService} from "./services/analytics/analytics.service";
import { MenuComponent } from "./components/general/menu/menu.component";
import { FooterComponent } from "./components/general/footer/footer.component";
import { BackgroundComponent } from "./components/general/background/background.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenuComponent, FooterComponent, BackgroundComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Arun Varghese';
    private titleService = inject(Title);
    private metaService = inject(Meta);
    private router = inject(Router);
    private ga = inject(AnalyticsService);

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
