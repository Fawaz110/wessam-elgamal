import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import $ from 'jquery';
import { Footer } from "./Components/footer/footer";
import { Navbar } from "./Components/navbar/navbar";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  loading = signal(true);

  constructor(
    private _TranslateService: TranslateService,
    private _Router: Router,
    private _Title: Title
  ) {
    setTimeout(() => {
      $('.loader-container').addClass('opacity-0');
      setTimeout(() => {
        this.loading = signal(false);
      }, 500);
    }, 1000);
    this._TranslateService.addLangs(['ar', 'en']);
    const userLang = navigator.language || (navigator as any).userLanguage;
    const lang = userLang.split('-')[0];
    // console.log('lang: ', lang);
    if (lang === 'en' || lang === 'ar') {
      localStorage.setItem('p-lang', lang);
      this.setDirection(lang);
      this._TranslateService.use(lang);
    }
    else {
      this._TranslateService.use('en');
      localStorage.setItem('p-lang', 'en');
      this.setDirection('en');
    }
  }

  setDirection = (lang: 'ar' | 'en') =>
    $('[dir]').attr('dir', lang === 'ar' ? 'rtl' : 'ltr');
}
