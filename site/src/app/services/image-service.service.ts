import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private images: { img: string; id: number; }[];

  constructor() {
    this.images = [
      { img: "../../assets/images/0/1.jpg", id: 0 },
      { img: "../../assets/images/0/2.jpg", id: 0 },
      { img: "../../assets/images/0/3.jpg", id: 0 },
      { img: "../../assets/images/0/4.jpg", id: 0 },
      { img: "../../assets/images/0/5.jpg", id: 0 },
      { img: "../../assets/images/0/6.jpg", id: 0 },
      { img: "../../assets/images/0/7.jpg", id: 0 },
      { img: "../../assets/images/1/1.jpg", id: 1 },
      { img: "../../assets/images/1/2.jpg", id: 1 },
      { img: "../../assets/images/1/3.jpg", id: 1 },
      { img: "../../assets/images/1/4.jpg", id: 1 },
      { img: "../../assets/images/1/5.jpg", id: 1 },
      { img: "../../assets/images/1/6.jpg", id: 1 },
      { img: "../../assets/images/1/7.jpg", id: 1 },
      { img: "../../assets/images/1/8.jpg", id: 1 },
      { img: "../../assets/images/1/9.jpg", id: 1 },
      { img: "../../assets/images/1/10.jpg", id: 1 },
      { img: "../../assets/images/1/11.jpg", id: 1 },
      { img: "../../assets/images/1/12.jpg", id: 1 },
      { img: "../../assets/images/1/13.jpg", id: 1 },
      { img: "../../assets/images/1/14.jpg", id: 1 },
      { img: "../../assets/images/1/15.jpg", id: 1 },
      { img: "../../assets/images/1/16.jpg", id: 1 },
      { img: "../../assets/images/1/17.jpg", id: 1 },
      { img: "../../assets/images/1/18.jpg", id: 1 },
      { img: "../../assets/images/1/19.jpg", id: 1 },
      { img: "../../assets/images/1/20.jpg", id: 1 },
      { img: "../../assets/images/1/21.jpg", id: 1 },
      { img: "../../assets/images/1/22.jpg", id: 1 },
      { img: "../../assets/images/1/23.jpg", id: 1 },
      { img: "../../assets/images/1/24.jpg", id: 1 },
      { img: "../../assets/images/1/25.jpg", id: 1 },
      { img: "../../assets/images/1/26.jpg", id: 1 },
      { img: "../../assets/images/1/27.jpg", id: 1 },
      { img: "../../assets/images/1/28.jpg", id: 1 },
      { img: "../../assets/images/1/29.jpg", id: 1 },
      { img: "../../assets/images/1/30.jpg", id: 1 },
      { img: "../../assets/images/1/31.jpg", id: 1 },
      { img: "../../assets/images/1/32.jpg", id: 1 },
      { img: "../../assets/images/1/33.jpg", id: 1 },
      { img: "../../assets/images/1/34.jpg", id: 1 },
      { img: "../../assets/images/1/35.jpg", id: 1 },
      { img: "../../assets/images/1/36.jpg", id: 1 },
      { img: "../../assets/images/1/37.jpg", id: 1 },
      { img: "../../assets/images/1/38.jpg", id: 1 },
      { img: "../../assets/images/1/39.jpg", id: 1 },
      { img: "../../assets/images/1/40.jpg", id: 1 },
      { img: "../../assets/images/1/41.jpg", id: 1 },
      { img: "../../assets/images/1/42.jpg", id: 1 },
      { img: "../../assets/images/1/43.jpg", id: 1 },
      { img: "../../assets/images/1/44.jpg", id: 1 },
      { img: "../../assets/images/1/45.jpg", id: 1 },
      { img: "../../assets/images/1/46.jpg", id: 1 },
      { img: "../../assets/images/1/47.jpg", id: 1 },
      { img: "../../assets/images/1/48.jpg", id: 1 },
      { img: "../../assets/images/1/49.jpg", id: 1 },
      { img: "../../assets/images/1/50.jpg", id: 1 },
      { img: "../../assets/images/1/51.jpg", id: 1 },
      { img: "../../assets/images/1/52.jpg", id: 1 },
      { img: "../../assets/images/1/53.jpg", id: 1 },
      { img: "../../assets/images/1/54.jpg", id: 1 },
      { img: "../../assets/images/1/55.jpg", id: 1 },
      { img: "../../assets/images/1/56.jpg", id: 1 },
      { img: "../../assets/images/1/57.jpg", id: 1 },
      { img: "../../assets/images/1/58.jpg", id: 1 },
      { img: "../../assets/images/1/59.jpg", id: 1 },
      { img: "../../assets/images/1/60.jpg", id: 1 },
      { img: "../../assets/images/1/61.jpg", id: 1 },
      { img: "../../assets/images/1/62.jpg", id: 1 },
      { img: "../../assets/images/1/63.jpg", id: 1 },
      { img: "../../assets/images/1/64.jpg", id: 1 },
      { img: "../../assets/images/1/65.jpg", id: 1 },
      { img: "../../assets/images/1/66.jpg", id: 1 },
      { img: "../../assets/images/1/67.jpg", id: 1 },
      { img: "../../assets/images/1/68.jpg", id: 1 },
      { img: "../../assets/images/1/69.jpg", id: 1 },
      { img: "../../assets/images/1/70.jpg", id: 1 },
      { img: "../../assets/images/1/71.jpg", id: 1 },
      { img: "../../assets/images/1/72.jpg", id: 1 },
      { img: "../../assets/images/1/73.jpg", id: 1 },
      { img: "../../assets/images/1/74.jpg", id: 1 },
      { img: "../../assets/images/1/75.jpg", id: 1 },
      { img: "../../assets/images/1/76.jpg", id: 1 },
      { img: "../../assets/images/1/77.jpg", id: 1 },
      { img: "../../assets/images/2/1.jpg", id: 2 },
      { img: "../../assets/images/2/2.jpg", id: 2 },
      { img: "../../assets/images/2/3.jpg", id: 2 },
      { img: "../../assets/images/2/4.jpg", id: 2 },
      { img: "../../assets/images/2/5.jpg", id: 2 },
      { img: "../../assets/images/2/6.jpg", id: 2 },
      { img: "../../assets/images/2/7.jpg", id: 2 },
      { img: "../../assets/images/2/8.jpg", id: 2 },
      { img: "../../assets/images/2/9.jpg", id: 2 },
      { img: "../../assets/images/2/10.jpg", id: 2 },
      { img: "../../assets/images/2/11.jpg", id: 2 },
      
    ];
  }

  public getAllImages() {
    return this.images;
  }

  public getImagesByCategory(id: number) {
    return this.images.filter(x => x.id === id);
  }
}
