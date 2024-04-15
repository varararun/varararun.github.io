import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-highlights',
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {
    selectedSection: 'qualifications' | 'skills' = 'qualifications';

    scrollTo(section) {
        document.getElementById(section)?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'});
    }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        this.selectedSection = event.target.scrollLeft > event.target.getBoundingClientRect().width - 50 ? 'skills' : 'qualifications';
    }
}
