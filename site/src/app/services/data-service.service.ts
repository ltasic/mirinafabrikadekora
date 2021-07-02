import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private languageSource = new BehaviorSubject(true);
  currentLanguage = this.languageSource.asObservable();

  constructor() { }

  changePictureLanguage(language: boolean) {
    this.languageSource.next(language)
  }

}
