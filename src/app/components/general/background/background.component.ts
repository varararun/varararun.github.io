import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-background',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
    readonly ICON_LIST = [
        'fa-github',
        'fa-angular',
        'fa-docker',
        'fa-npm',
        'fa-java',
        'fa-js',
        'fa-css3',
        'fa-html5',
        'fa-codepen'
    ]
}
