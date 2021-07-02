import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../services/data-service.service'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit, OnDestroy {

  language: boolean;

  subscription: Subscription;

  constructor(private translateLanguageService: TranslateConfigService, private data: DataServiceService) {

  }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public changeLanguage(languageType: string) {
    languageType === 'sr' ? this.newLanguage(true) : this.newLanguage(false);
    this.translateLanguageService.changeLanguage(languageType);
  }

  newLanguage(flag: boolean) {
    this.data.changePictureLanguage(flag)
  }

  ngOnInit(): void {
    this.subscription = this.data.currentLanguage.subscribe(language => this.language = language)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
