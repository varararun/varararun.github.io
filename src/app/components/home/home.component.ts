import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CreditComponent } from './credit/credit.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, AboutComponent, HighlightsComponent, ExperienceComponent, ProjectsComponent, ContactComponent, CreditComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
