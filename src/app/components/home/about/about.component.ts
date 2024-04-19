import {Component} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {ThemeService} from "../../../services/theme/theme.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    role = '';

    constructor(private languageService: LanguageService, public analyticsService: AnalyticsService, public themeService: ThemeService) {
        window.matchMedia('(display-mode: standalone)').matches;
        this.languageService.translateService.get('About.Role').subscribe(val => {
            this.type(val);
        });
    }

    downloadResume() {
        this.languageService.translateService.get("Resume").subscribe(val => {
            window.open(val, "_blank");
        })
    }

    wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    async type(text: string, delay = 100) {
        await this.wait(500);
        for (const letter of text) {
            this.role += letter;
            await this.wait(delay);
        }
    }

    dragEnded(event: CdkDragEnd) {
        event.source._dragRef.reset();
    }
}
