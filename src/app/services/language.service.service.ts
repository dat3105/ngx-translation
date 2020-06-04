import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selectedLanguage = 'ch';
  segmentsNames: any = {};
  constantSegmentNames: any = {};
  language = {
    undefined: { 'en': '', 'ch': '' },
    null: { 'en': '', 'ch': '' },
    '': { 'en': '', 'ch': '' },
    'hello': { 'en': 'Hello', 'ch': '你好' },
    'world': { 'en': 'World', 'ch': '世界' }
  };

  constructor(private _http: HttpClient) { }

  getLang(value: string, language: string,args?: any): any {
    if (this.language[value]) {
      return this.language[value][language];
    }
    return value;
  }
  changeLanguage() {
    if (this.selectedLanguage === 'en') {
      this.selectedLanguage = 'ch';
    } else {
      this.selectedLanguage = 'en';
    }
  }
}