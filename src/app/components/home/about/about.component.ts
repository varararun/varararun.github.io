import {Component} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {ThemeService} from "../../../services/theme/theme.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    constructor(private languageService: LanguageService, public analyticsService: AnalyticsService, public themeService: ThemeService) {
        window.matchMedia('(display-mode: standalone)').matches;
    }

    downloadResume() {
        this.languageService.translateService.get("Resume").subscribe(val => {
            window.open(val, "_blank");
        })
    }
}
