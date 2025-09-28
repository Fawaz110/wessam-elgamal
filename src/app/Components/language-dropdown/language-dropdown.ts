import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import $ from 'jquery';

@Component({
  selector: 'app-language-dropdown',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './language-dropdown.html',
  styleUrl: './language-dropdown.scss'
})
export class LanguageDropdown implements OnInit {
  language: 'ar' | 'en' = 'en';

  constructor(
    private _TranslateService: TranslateService
  ) { }
  toggleSideNav() {
    if ($('nav .nav-links').hasClass('max-md:opacity-0')) {
      // console.log(true)
      $('nav .nav-links').removeClass('max-md:rtl:translate-x-full max-md:ltr:-translate-x-full max-md:opacity-0');
    }
    else {
      // console.log(false)
      $('nav .nav-links').addClass('max-md:rtl:translate-x-full max-md:ltr:-translate-x-full max-md:opacity-0');
    }
  }

  toggleMenu() {
    if ($('.lang-menu').hasClass('hidden')) {
      // here menu must be visible.
      $('.lang-menu').addClass('opacity-0');
      $('.lang-menu').removeClass('hidden');
      setTimeout(() => {
        $('.lang-menu').removeClass('opacity-0');
        $('.lang-menu').addClass('translate-y-3');
      }, 10);
      console.log('show menu');
    } else {
      // here menu must be invisible.
      $('.lang-menu').removeClass('translate-y-3');
      $('.lang-menu').addClass('opacity-0');
      setTimeout(() => {
        $('.lang-menu').removeClass('opacity-0');
        $('.lang-menu').addClass('hidden');
      }, 200);
    }
  }

  languageChanged() {
    localStorage.setItem('p-lang', this.language);
    this._TranslateService.use(this.language);
    this.setDirection(this.language);
    this.toggleMenu();
    this.toggleSideNav();
  }

  setDirection = (lang: 'ar' | 'en') =>
    $('[dir]').attr('dir', lang === 'ar' ? 'rtl' : 'ltr');

  ngOnInit(): void {
    // const userLang = navigator.language || (navigator as any).userLanguage;
    // const lang = userLang.split('-')[0];

    // if (lang === 'en' || lang === 'ar')
    //   this.language = lang;
    // else
    //   this.language = 'en';
    const lang = localStorage.getItem('p-lang') as 'en' | 'ar';
    this.language = lang || 'en'
  }

}
