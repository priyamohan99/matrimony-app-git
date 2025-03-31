import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';


@Component({
  selector: 'app-swipe-screen',
  imports: [MatCardModule],
  templateUrl: './swipe-screen.component.html',
  styleUrl: './swipe-screen.component.scss',
  animations:[
    trigger('cardAnimator',[
      //transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      //transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
     // transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft)))
    ])
  ]
})

export class SwipeScreenComponent {
  animationState: string="";

  startAnimation(state: any){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimationState(){
    this.animationState='';
  }

}