import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageDropdown } from "../language-dropdown/language-dropdown";
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import $ from 'jquery'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    LanguageDropdown, 
    TranslatePipe, 
    NgClass,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  scrolled = signal(false);
  _Router = inject(Router);

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

  routeTo(route: string) {
    this.toggleSideNav()
    this._Router.navigate([route]);
  }

  @HostListener("window:scroll")
  scrolling() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.scrolled = signal(true);
    } else {
      this.scrolled = signal(false);

    }
  }
}
