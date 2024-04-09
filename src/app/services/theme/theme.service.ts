import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    public theme: 'light' | 'dark' = 'dark';

    switchTheme() {
        this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.theme);
        localStorage.setItem('av-theme', this.theme);
        document.body.classList.remove('scroll-lock');
    }
}
