import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent {
  faStar=faStar;
  faShoppingBasket=faShoppingBasket;
}
