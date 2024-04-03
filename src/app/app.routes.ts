import { Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ForthPageComponent } from './forth-page/forth-page.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { SevenPageComponent } from './app/seven-page/seven-page.component';
import { LastPageComponent } from './app/last-page/last-page.component';
import { LastElementComponent } from './app/last-element/last-element.component';
import { DesignPageComponent } from './app/design-page/design-page.component';

export const routes: Routes = 
[
    { path: '', component: FirstPageComponent },
    { path: 'secondpage', component: SecondPageComponent },
    { path: 'thirdpage', component: ThirdPageComponent },
    { path: 'forthpage', component: ForthPageComponent },
    { path: 'fifthpage', component: FifthpageComponent },
    { path: 'sevenpage', component: SevenPageComponent },
    { path: 'lastpage', component: LastPageComponent },
    { path: 'lastelement', component: LastElementComponent },
    { path: 'designpage', component: DesignPageComponent },
]   
;
