import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    selected = '';
    languages = [];
    private lngChange = new Subject<string>();

    constructor(private translate: TranslateService) {

        this.languages = [
            // TODO - imgUrls are missing
            { id: 1, text: 'English', value: 'en', imgUrl: 'url(../../../assets/i18n/flags/uk_small.png)', checked: false },
            { id: 2, text: 'German', value: 'de', imgUrl: 'url(../../../assets/i18n/flags/ger_small.png)', checked: false },
            { id: 3, text: 'Croatian', value: 'hr', imgUrl: 'url(../../../assets/i18n/flags/ger_small.png)', checked: false }
        ];
    }

    setInitialAppLanguage() {
        // fallback if there's no language set
        const language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);

        const lng = localStorage.getItem(LNG_KEY);
        if (lng) {
            this.setLanguage(lng);
            this.selected = lng;
        } else {
            this.setLanguage(language);
            this.selected = language;
        }
    }

    updateDefaultLanguage(lng) {
        // tslint:disable-next-line:no-shadowed-variable
        this.languages.forEach(element => {
            if (element.value === lng) {
                element.checked = true;
            }
        });
    }

    getLanguages() {
        return this.languages;
    }

    setLanguage(lng: string) {
        this.translate.use(lng);
        this.selected = lng;
        localStorage.setItem(LNG_KEY, lng);

        this.updateDefaultLanguage(lng);
    }

    languageChangeStart(value: string) {
        this.lngChange.next(value);
    }

    languageChangeStartListener(): Observable<string> {
        return this.lngChange.asObservable();
    }
}
