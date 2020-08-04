import { Component } from '@angular/core';
import { LanguageService } from './core/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO - replace icons automatically added by PWA > assets/icons and update manifest.webmanifest

  constructor(private languageService: LanguageService) {
    this.initializeApp();
  }

  initializeApp() {
    this.languageService.setInitialAppLanguage();
  }
}
