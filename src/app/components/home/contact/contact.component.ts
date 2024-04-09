import {Component} from '@angular/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    constructor(public ga: AnalyticsService) {
    }
}
