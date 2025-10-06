import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Data } from '../../data/data.export';
import { Interfaces } from '../../data/interfaces.export';
import { Header } from "../header/header";

@Component({
  selector: 'app-experience',
  imports: [Header, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  experience: Interfaces.ExperienceData[] = []
  
  constructor(
    private _TranslateService: TranslateService,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    this.getExperience();

    this._TranslateService.onLangChange.subscribe(() => {
      this.getExperience();
    })
  }

  getExperience() {
    const lang = (this._TranslateService.getCurrentLang() == 'ar') ? 'ar' : 'en';
    switch (lang) {
      case 'ar':
        this.experience = Data.experienceAr;
        break;
      default:
        this.experience = Data.experienceEn;
        break;
    }
  }

}
