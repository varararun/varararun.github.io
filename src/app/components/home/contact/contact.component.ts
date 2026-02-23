import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    ga = inject(AnalyticsService);
}
