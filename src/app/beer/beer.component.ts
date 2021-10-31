import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input("beer") beer:any;
  faBeer = faBeer;
  isFav:boolean;

  getImagePath(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.beer.image_url)
  }

  setFavouriteBeer(){
    this.isFav = !this.isFav;
    if(this.isFav){
      this.bService.setFav(this.beer.id);
    }
  }

  constructor(private domSanitizer: DomSanitizer, private bService: BeersService) {
    this.isFav = false;
  }

  ngOnInit(): void {
  }

}
