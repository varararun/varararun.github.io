import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HighlightsComponent} from './highlights/highlights.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ExperienceComponent} from "./experience/experience.component";
import {AboutComponent} from './about/about.component';
import {CreditComponent} from "./credit/credit.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        HighlightsComponent,
        ExperienceComponent,
        ProjectsComponent,
        ContactComponent,
        CreditComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
})
export class HomeModule {
}
