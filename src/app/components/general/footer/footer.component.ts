import {Component, HostListener, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {ThemeService} from "../../../services/theme/theme.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    scrollPosition = 0;
    themeService = inject(ThemeService);
    ga = inject(AnalyticsService);

    @HostListener('window:scroll')
    checkScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    scrollTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
