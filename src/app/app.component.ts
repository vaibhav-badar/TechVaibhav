import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav-bar';

  constructor(private router: Router) {
    // ...
  }
  
  goToAddfieldPage() {
    this.router.navigateByUrl('/emp-details');
    }

  goToUpdatefieldPage() {
    this.router.navigateByUrl('/emp-update');
    }

    goToEditfieldPage(){
    this.router.navigateByUrl('/emp-edit');
    }

    goToHomePage(){
    this.router.navigateByUrl('/');
    }

}
