import { TrainingCycle } from './../../data/interfaces';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CertificateCard } from "../certificate-card/certificate-card";
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";
import { RandomIndex } from '../../data/data';
import { Data } from '../../data/data.export';
import { Certificate } from '../../data/interfaces';
import { Interfaces } from '../../data/interfaces.export';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, CertificateCard, RouterLink, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  certificates: Certificate[] = []
  experience: string[] = []
  medals: string[] = []
  cycles: Interfaces.TrainingCycle[] = []

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
    this.getRequiredData();
    this._TranslateService.onLangChange.subscribe(() => {
      this.updateTitle();
      this.getRequiredData();
    })
  }

  getRequiredData() {
    const lang = (this._TranslateService.getCurrentLang() == 'ar') ? 'ar' : 'en';

    this.getCertificates(lang);
    this.getExperience(lang);
    this.getMedals(lang);
    this.getTrainingCycles(lang);
  }

  getCertificates(lang: 'ar' | 'en') {
    switch (lang) {
      case 'ar':
        this.certificates = Data.CertificatesAr.slice(0, 4);
        break;
      default:
        this.certificates = Data.CertificatesEn.slice(0, 4);
        break;
    }
  }

  getExperience(lang: 'ar' | 'en') {
    switch (lang) {
      case 'ar':
        this.experience = Data.TotallyExperienceAr;
        break;
      default:
        this.experience = Data.TotallyExperienceEn;
        break;
    }
  }

  getTrainingCycles(lang: 'ar' | 'en') {
    switch (lang) {
      case 'ar':
        this.cycles = Data.TainingCyclesAr;
        break;
      default:
        this.cycles = Data.TainingCyclesEn;
        break;
    }
  }

  getMedals(lang: 'ar' | 'en') {
    switch (lang) {
      case 'ar':
        this.medals = Data.MedalsAr;
        break;
      default:
        this.medals = Data.MedalsEn;
        break;
    }
  }

  updateTitle() {
    this._TranslateService.get('title.home').subscribe((translatedTitle: string) => {
      // console.log('title home updated from home.ts: ', translatedTitle);
      this._Title.setTitle(translatedTitle);
    });
  }



}
