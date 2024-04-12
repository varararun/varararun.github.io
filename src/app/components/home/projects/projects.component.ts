import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {
    filtered = [];
    all = [];
    selectedTag = '';

    constructor(
        private languageService: LanguageService
    ) {
    }

    ngOnInit() {
        this.languageService.translateService.get("Projects.Projects").subscribe(val => {
            this.all = val;
            this.filterProjects('featured');
        });
    }

    filterProjects(tag: string) {
        if(this.selectedTag === tag) {
            return;
        }
        this.selectedTag = tag;
        this.filtered = [];
        setTimeout(() => {
            this.filtered = this.all.filter((project) => {
                const tags: string[] = project['Tags'];
                if (!this.selectedTag) {
                    return true;
                }
                return tags ? tags.includes(this.selectedTag) : false
            });
        }, 500);
    }
}
