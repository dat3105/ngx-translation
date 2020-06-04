import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { LanguageService } from './services/language.service.service';
// import { LanguagePipe } from './language.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private translateService1: TranslateService){
     
    }
  title = 'parameters-ngx-translate';
  langs = ['en', 'vn'];


  public ngOnInit(): void {
      
    let browserlang1 = this.translateService1.getBrowserLang();
    if (this.langs.indexOf(browserlang1) > -1) {
      this.translateService1.setDefaultLang(browserlang1);
    } else {
      this.translateService1.setDefaultLang('en');
    }

    // let browserlang2 = this.translateService2.getBrowserLang();
    // if (this.langs.indexOf(browserlang2) > -1) {
    //   this.translateService2.setDefaultLang(browserlang2);
    // } else {
    //   this.translateService2.setDefaultLang('en');
    // }
  }
  totallang=''
  public useLanguage1(lang: string): void {
    this.translateService1.setDefaultLang(lang); 
    this.totallang = lang
  }

  // public useLanguage2(lang: string): void {
  //   this.translateService2.setDefaultLang(lang);
  // }

  // language1='hello'
  // toggle1 = true;
  // get format1() { return this.toggle1 ? 'ch' : 'en'; }
  // toggleFormat1() { this.toggle1 = !this.toggle1; }

  // language2 = 'word'
  // toggle2 = true;
  // get format2() { return this.toggle2 ? 'ch' : 'en'; }
  // toggleFormat2() { this.toggle2 = !this.toggle2; }

  toggle=true;
  toggleFormat(){
    this.toggle = !this.toggle
    this.useLanguage1(this.totallang);
  }
  
}
