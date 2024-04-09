import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    constructor(
        private $gaService: GoogleAnalyticsService
    ) { }

    sendAnalyticEvent(action: string, category: string, label){
        this.$gaService.event(action, category, label);
        const events = this.localEvents;
        events[action] = events[action] || 0;
        ++events[action];
        this.saveLocalEvents(events);
    }

    sendAnalyticPageView(path: string, title: string){
        this.$gaService.pageView(path, title);
        const views = this.localPageViews;
        views[path] = views[path] || 0;
        ++views[path];
        this.saveLocalPageViews(views);
    }

    get localPageViews() {
        const obj = JSON.parse(localStorage.getItem('av-analytics-page-views') || '{}');
        return typeof obj !== 'object' ? {} : obj;
    }

    saveLocalPageViews(views) {
        localStorage.setItem('av-analytics-page-views', JSON.stringify(views));
    }

    get localEvents() {
        const obj = JSON.parse(localStorage.getItem('av-analytics-events') || '{}')
        return typeof obj !== 'object' ? {} : obj;
    }

    saveLocalEvents(events) {
        localStorage.setItem('av-analytics-events', JSON.stringify(events));
    }

}
