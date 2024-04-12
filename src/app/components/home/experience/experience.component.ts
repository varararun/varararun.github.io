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
                        animate('.3s ease', style({opacity: 0}))
                    ]
                )
            ]
        )
    ]
})
export class ExperienceComponent implements OnInit {
    selectedTag = '';
    tags = [];
    all = [];
    filtered = [];

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
        if(this.selectedTag === tag) {
            return;
        }
        this.selectedTag = tag;
        this.filtered = [];
        setTimeout(() => {
            this.filtered = this.all.filter((project) => {
                if (!this.selectedTag) {
                    return true;
                }
                return project['Category'] === this.selectedTag;
            });
        }, 500);
    }
}
