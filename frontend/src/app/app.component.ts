import { Component } from '@angular/core';
import { LanguageService } from './core/language/language.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  defaultSelectedLanguage: string;
  // languageChangeSubscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.initializeApp();
    // this.languageChangeSubscription = this.languageService.languageChangeStartListener().subscribe(value => {
    //   this.defaultSelectedLanguage = value;
    // });
  }

  initializeApp() {
    this.languageService.setInitialAppLanguage();
  }
}
