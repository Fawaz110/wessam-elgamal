import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CertificateCard } from "../certificate-card/certificate-card";
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, CertificateCard, RouterLink, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  constructor(
    private _Title: Title,
    private _TranslateService: TranslateService,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    this.updateTitle();
    this._TranslateService.onLangChange.subscribe(() => {
      this.updateTitle();
    })
  }

  updateTitle() {
    this._TranslateService.get('title.home').subscribe((translatedTitle: string) => {
      // console.log('title home updated from home.ts: ', translatedTitle);
      this._Title.setTitle(translatedTitle);
    });
  }



}
