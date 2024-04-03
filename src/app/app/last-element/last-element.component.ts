import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{faBackward}from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-last-element',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './last-element.component.html',
  styleUrl: './last-element.component.css'
})
export class LastElementComponent {
  faBackward=faBackward;
}
