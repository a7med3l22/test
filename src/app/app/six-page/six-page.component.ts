import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-six-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './six-page.component.html',
  styleUrl: './six-page.component.css'
})
export class SixPageComponent {
  faBackward=faBackward;

}
