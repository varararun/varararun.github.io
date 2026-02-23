import {Injectable, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    readonly DEFAULT = "en";
    translateService = inject(TranslateService);
}
