import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { from } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  images = [
    {
      id: 1,
      path: '../../../assets/img/bg/char_01.png'},
    {
      id: 2,
      path: '../../../assets/img/char_02.jpg'}
  ];
  imagePath: any[] = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  ngOnInit() {
    this.images.map((res) => {
      this.imagePath.push(res);
    });
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
}
