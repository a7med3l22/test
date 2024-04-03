import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ForthPageComponent } from './forth-page/forth-page.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstPageComponent,SecondPageComponent,ThirdPageComponent,ForthPageComponent,FifthpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Najood';
}
