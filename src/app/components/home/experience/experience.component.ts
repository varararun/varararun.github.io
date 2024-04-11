import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    animations: [
        trigger(
            'exit-animation',
            [
                transition(
                    ':leave',
                    [
                        style({opacity: 1}),
                        animate('.5s ease', style({opacity: 0, transform: 'translateY(100px)'}))
                    ]
                )
            ]
        )
    ]
})
export class ExperienceComponent implements OnInit {
    all = [];
    filtered = [];
    selectedTag = 'Work';
    tags = [];

    constructor(private languageService: LanguageService) {
    }

    ngOnInit() {
        this.languageService.translateService.get("Experience.Items").subscribe(val => {
            this.all = val;
            this.tags = [...new Set(this.all.map((experience) => experience['Category']))];
            this.filterExperience(this.tags[0]);
        });
    }

    filterExperience(tag: string) {
        this.selectedTag = tag;
        this.filtered = this.all.filter((project) => {
            if (!this.selectedTag) {
                return true;
            }
            return project['Category'] === this.selectedTag;
        });
    }
}
