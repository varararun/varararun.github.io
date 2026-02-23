import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-highlights',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

}
