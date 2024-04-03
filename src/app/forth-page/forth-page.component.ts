import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faMoneyCheck, faList } from '@fortawesome/free-solid-svg-icons';
import { FifthpageComponent } from '../fifthpage/fifthpage.component';
import { SixPageComponent } from '../app/six-page/six-page.component';
@Component({
  selector: 'app-forth-page',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, FifthpageComponent, CommonModule,SixPageComponent],
  templateUrl: './forth-page.component.html',
  styleUrls: ['./forth-page.component.css']
})
export class ForthPageComponent {
  faBackward = faBackward;
  faMoneyCheck = faMoneyCheck;
  faList = faList;

  isComponentVisible = false;
  isComponentVisible1 = false;

  toggleComponentVisibility() {
    if (this.isComponentVisible) {
      return; 
    }
    this.isComponentVisible = true;
    
    if (this.isComponentVisible) {
      this.isComponentVisible1 = false;
    }
  }

  toggleComponentVisibility1() {
    if (this.isComponentVisible1) {
      return; 
    }
    this.isComponentVisible1 = true;
   
    if (this.isComponentVisible1) {
      this.isComponentVisible = false;
    }
  }
}
