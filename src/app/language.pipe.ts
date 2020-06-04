import { Pipe, PipeTransform, OnInit, OnChanges } from '@angular/core';
import { LanguageService } from './services/language.service.service';

@Pipe({
    name: 'language'
})
export class LanguagePipe implements PipeTransform {

    constructor(
        public lang: LanguageService
    ) { }

    transform(value: string,language: string, args?: any): any {
        return this.lang.getLang(value,language);
    }
}