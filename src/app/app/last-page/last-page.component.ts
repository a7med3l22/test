import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{faBackward}from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-last-page',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './last-page.component.html',
  styleUrl: './last-page.component.css'
})
export class LastPageComponent {
  faBackward=faBackward;
}
