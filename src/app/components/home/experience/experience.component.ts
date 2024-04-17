import {Component, HostListener, OnInit} from '@angular/core';
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
    scrolled = false;

    constructor(private languageService: LanguageService) {
    }

    ngOnInit() {
        this.languageService.translateService.get('Experience.Items').subscribe(val => {
            this.all = val;
            this.tags = [...new Set(this.all.map((experience) => experience['Category']))];
            this.selectedTag = this.tags[0];
        });
    }

    scrollTo(tag: string) {
        document.getElementById(tag)?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start' });
    }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        if(this.selectedTag === this.tags[1]) {
            this.scrolled = true;
        }
        this.selectedTag = this.tags[Math.floor(event.target.scrollLeft / (event.target.getBoundingClientRect().width - 30))] || this.tags[0];
    }
}
