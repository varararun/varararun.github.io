import {Component, HostListener, OnInit} from '@angular/core';
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
    scrolled = false;

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
        if (this.selectedTag === tag) {
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

    scrollTo(index: number) {
        this.scrolled = true;
        document.getElementById(`project-${index}`)?.scrollIntoView({
            behavior: "smooth",
            block: 'nearest',
            inline: 'start'
        });
    }

    scroll(index: number, direction: 'right' | 'left') {
        if (direction === 'right') {
            if (index === this.filtered.length - 1) {
                this.scrollTo(0);
            } else {
                this.scrollTo(index + 1);
            }
        }
        if (direction === 'left') {
            if (index === 0) {
                this.scrollTo(this.filtered.length - 1);
            } else {
                this.scrollTo(index - 1);
            }
        }
    }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        if(event.target.scrollLeft > event.target.getBoundingClientRect().width - 50) {
            this.scrolled = true;
        }
    }
}
