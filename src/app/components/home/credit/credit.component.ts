import {Component} from '@angular/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-credit',
    templateUrl: './credit.component.html',
    styleUrl: './credit.component.scss'
})
export class CreditComponent {
    constructor(public ga: AnalyticsService) {
    }
}
