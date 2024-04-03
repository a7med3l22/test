import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  faBackward=faBackward;
}
