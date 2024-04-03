import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{faBackward} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-design-page',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule],
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.css'
})
export class DesignPageComponent {
  faBackward=faBackward;
}
