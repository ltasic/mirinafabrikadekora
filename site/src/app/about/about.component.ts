import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public slideIndex: number = 1;
  public slides: { img: string, id: number }[];

  constructor(private imageService: ImageServiceService) {
    this.slides = this.imageService.getImagesByCategory(6);
  }

  public plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  public currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  public getSlideIndex() {
    return this.slideIndex;
  }

  public showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = this.slides.length
    }
  }

  public showImage(index: number) {
    let displayChoice: string;
    let slideIndex = this.getSlideIndex();

    if (index === slideIndex) {
      displayChoice = "block";
    }
    else {
      displayChoice = "none";
    }

    return {
      display: displayChoice
    }
  }

  public setActive(index: number) {
    let slideIndex = this.getSlideIndex();

    return {
      "active": index === slideIndex,
      "": index !== slideIndex
    };
  }

  ngOnInit(): void {
    AOS.init();
  }
}
