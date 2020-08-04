import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';

@Component({
    selector: 'app-language-change',
    templateUrl: './language-change.component.html',
    styleUrls: ['language-change.component.scss']
})

export class LanguageChangeComponent implements OnInit {
    languages = [];
    defaultSelectedLanguage: string;

    constructor(
        private languageService: LanguageService
    ) { }

    // function for language change
    changeLanguage(lng) {
        // set selected language to current
        this.languageService.setLanguage(lng.value);
        this.languageService.languageChangeStart(lng.value);

        // go through all languages and set the flag so the class can be aplied in the view
        this.languages.forEach(element => {
            element.value === lng.value ? element.checked = true : element.checked = false;
        });
    }

    ngOnInit() {
        // set initial needed variables
        this.languages = this.languageService.getLanguages();
        this.defaultSelectedLanguage = this.languageService.selected;
    }

}
