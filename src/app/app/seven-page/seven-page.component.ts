import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seven-page',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './seven-page.component.html',
  styleUrl: './seven-page.component.css'
})
export class SevenPageComponent {
  faBackward=faBackward;
  faHeart=faHeart;
  faGear=faGear;
  faLocationDot=faLocationDot;
  faStar=faStar;
}
