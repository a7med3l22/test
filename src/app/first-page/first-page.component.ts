import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  faSearch=faSearch;
  faUser=faUser;
  faHandshake=faHandshake;
}
