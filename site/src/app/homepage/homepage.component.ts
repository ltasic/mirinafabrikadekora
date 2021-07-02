import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  language: boolean;
  subscription: Subscription;

  constructor(private data: DataServiceService) { }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.subscription = this.data.currentLanguage.subscribe(language => this.language = language)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
