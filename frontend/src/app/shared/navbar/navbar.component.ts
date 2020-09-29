import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

  navbarBurgers: any;
  authenticated: boolean;
  authSubscription: Subscription;
  userEmail: string;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.authenticationSuccessEvent.subscribe(event => {
      event ? this.authenticated = true : this.authenticated = false;
      this.userEmail = this.authService.getUserEmail();
    });
  }

  logout() {
    this.authService.logout();
  }

  navbarStartSetup() {
    // Get all "navbar-burger" elements
    this.navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if (this.navbarBurgers.length > 0) {

      // Add a click event on each of them
      this.navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  ngOnInit(): void {
    this.navbarStartSetup();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
