import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {MatCardModule} from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-swipe',
  imports: [MatCardModule,SlickCarouselModule,MatButtonModule,
    RouterOutlet
  ],
  templateUrl: './search-swipe.component.html',
  styleUrl: './search-swipe.component.scss'
})
export class SearchSwipeComponent implements OnInit{
  public profileData:any;

  constructor(public _profileService:ProfileService,
    public _router:Router
  ){}

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode:false,
    focusOnSelect:false,
    responsive: [
      {
        breakpoint: 1204, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 970, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  ngOnInit(): void {   
    this.profileData= this._profileService.profileData.data;
   //console.log(this._profileService.profileData.data);    
  }

  onClickButton(id:any){
    this._router.navigate([`/view-profile/${id}`]);    
  }

}
