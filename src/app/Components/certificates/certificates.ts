import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CertificateCard } from "../certificate-card/certificate-card";
import { Header } from "../header/header";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Interfaces } from '../../data/interfaces.export';
import { isPlatformBrowser } from '@angular/common';
import { Data } from '../../data/data.export';

@Component({
  selector: 'app-certificates',
  imports: [CertificateCard, Header, TranslatePipe],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates implements OnInit {

  certificates: Interfaces.Certificate[] = []

  constructor(
    private _TranslateService: TranslateService,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    this.getCertificates();

    this._TranslateService.onLangChange.subscribe(() => {
      this.getCertificates();
    })
  }

  getCertificates() {
    const lang = (this._TranslateService.getCurrentLang() == 'ar') ? 'ar' : 'en';

    switch (lang) {
      case 'ar':
        this.certificates = Data.CertificatesAr;
        break;
      default:
        this.certificates = Data.CertificatesEn;
        break;
    }
  }
}
