import {Component, HostListener, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {LanguageService} from "../../../services/language/language.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, TranslateModule],
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
    filtered: Record<string, unknown>[] = [];
    all: Record<string, unknown>[] = [];
    selectedTag = '';
    scrolled = false;
    private languageService = inject(LanguageService);

    ngOnInit() {
        this.languageService.translateService.get("Projects.Projects").subscribe(val => {
            this.all = Array.isArray(val) ? val : [];
            this.filterProjects('featured');
        });
    }

    filterProjects(tag: unknown) {
        const normalizedTag = this.normalizeTag(tag);
        if (this.selectedTag === normalizedTag) {
            return;
        }
        this.selectedTag = normalizedTag;
        this.filtered = this.all.filter((project) => {
            const tags = this.getTags(project);
            if (!this.selectedTag) {
                return true;
            }
            return tags.some(tagItem => this.normalizeTag(tagItem) === this.selectedTag);
        });
    }

    isSelectedTag(tag: unknown): boolean {
        return this.selectedTag === this.normalizeTag(tag);
    }

    normalizeTag(tag: unknown): string {
        return typeof tag === 'string' ? tag.trim().toLowerCase() : '';
    }

    getTags(project: Record<string, unknown>): string[] {
        const tags = project['Tags'];
        return Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === 'string') : [];
    }

    getTech(project: Record<string, unknown>): string[] {
        const tech = project['Tech'];
        return Array.isArray(tech) ? tech.filter((item): item is string => typeof item === 'string') : [];
    }

    getTechIcons(project: Record<string, unknown>): string[] {
        const icons = project['TechIcons'];
        return Array.isArray(icons) ? icons.filter((item): item is string => typeof item === 'string') : [];
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
