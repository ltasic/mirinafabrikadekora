import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageServiceService } from '../services/image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {


  private activeSubscriptions: Subscription[];
  public images: { img: string, id: number }[];
  public category: number;
  public picNumber: number;

  constructor(private imageService: ImageServiceService, private route: ActivatedRoute) {
    this.picNumber = 0;
    const urlParamSub = this.route.paramMap.subscribe(params => {
      this.activeSubscriptions = [];
      const id = params.get('id');
      this.category = Number.parseInt(id);
      this.images = this.imageService.getImagesByCategory(Number.parseInt(id));
    });
    this.activeSubscriptions.push(urlParamSub);
  }

  public setParams(picNumber: number) {
    this.picNumber = picNumber;
  }

  goNext() {
    this.picNumber = this.picNumber % this.images.length + 1;
  }

  goPrevious() {
    if (this.picNumber - 1 === 0)
      this.picNumber = this.images.length;
    else
      this.picNumber -= 1;
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activeSubscriptions.forEach(sub => sub.unsubscribe());
  }

}
