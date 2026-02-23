import {ChangeDetectorRef, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {LanguageService} from "../../../services/language/language.service";
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {ThemeService} from "../../../services/theme/theme.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, DragDropModule, TranslateModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    role = '';
    private typingToken = 0;
    private cdr = inject(ChangeDetectorRef);
    private languageService = inject(LanguageService);
    analyticsService = inject(AnalyticsService);
    themeService = inject(ThemeService);

    constructor() {
        this.languageService.translateService
            .stream('About.Role')
            .pipe(takeUntilDestroyed())
            .subscribe((val: string) => {
                this.type(val);
            });
    }

    downloadResume() {
        this.languageService.translateService.get("Resume").subscribe(val => {
            window.open(val, "_blank");
        })
    }

    wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    async type(text: string, delay = 100) {
        const token = ++this.typingToken;
        this.role = '';
        this.cdr.detectChanges();
        await this.wait(500);
        if (token !== this.typingToken) {
            return;
        }
        for (const letter of text) {
            if (token !== this.typingToken) {
                return;
            }
            this.role += letter;
            this.cdr.detectChanges();
            await this.wait(delay);
        }
    }

    dragEnded(event: CdkDragEnd) {
        event.source._dragRef.reset();
    }
}
