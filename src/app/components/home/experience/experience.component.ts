import {Component, HostListener, OnInit} from '@angular/core';
import {LanguageService} from "../../../services/language/language.service";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']

})
export class ExperienceComponent implements OnInit {
    selectedTag = '';
    tags = [];
    all = [];

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
        this.selectedTag = this.tags[Math.floor(event.target.scrollLeft / (event.target.getBoundingClientRect().width - 30))] || this.tags[0];
    }
}
