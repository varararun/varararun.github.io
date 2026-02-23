import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-credit',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './credit.component.html',
    styleUrl: './credit.component.scss'
})
export class CreditComponent {
    ga = inject(AnalyticsService);
}
