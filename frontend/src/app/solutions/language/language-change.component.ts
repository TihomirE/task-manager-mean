import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';

@Component({
    selector: 'app-language-change',
    templateUrl: './language-change.component.html'
})

export class LanguageChangeComponent implements OnInit {
    languages = [];
    defaultSelectedLanguage: string;
    title: string;

    constructor(
        private languageService: LanguageService,
        // private titleChangeSrvc: TitleChageHelperService
    ) { }

    changeLanguage(lng) {
        this.languageService.setLanguage(lng.value);
        this.languageService.languageChangeStart(lng.value);

        this.languages.forEach(element => {
            if (element.value === lng.value) {
                element.checked = true;
            } else {
                element.checked = false;
            }
        });
        this.titleCheck(lng.value);
    }

    titleCheck(lng: string) {
        if (lng === 'de') {
            this.title = 'Sprache auswählen';
        } else {
            this.title = 'Select Language';
        }
        // this.titleChangeSrvc.titleChangeStart(this.title);
    }

    ngOnInit() {
        this.languages = this.languageService.getLanguages();
        this.defaultSelectedLanguage = this.languageService.selected;
        this.titleCheck(this.defaultSelectedLanguage);
        // this.titleChangeSrvc.titleChangeStart(this.title);

        // this.languages.forEach(element => {
        //     if (element.value === this.defaultSelectedLanguage) {
        //         element.checked = true;
        //     } else {
        //         element.checked = false;
        //     }
        // });
    }

}
