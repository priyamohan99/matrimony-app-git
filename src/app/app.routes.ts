import { Routes } from '@angular/router';
import { SearchSwipeComponent } from './modules/search-swipe/search-swipe.component';
import { SwipeScreenComponent } from './modules/swipe-screen/swipe-screen.component';
import { ViewProfileComponent } from './modules/view-profile/view-profile.component';

export const routes: Routes = [
    {path:'search-swipe',component:SearchSwipeComponent},
    {path:'swipe-screen',component:SwipeScreenComponent},
    {path:'view-profile/:id',component:ViewProfileComponent}
];
