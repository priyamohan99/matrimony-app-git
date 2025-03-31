import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-view-profile',
  imports: [MatCardModule,MatGridListModule],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
})
export class ViewProfileComponent implements OnInit {
  profileId: any;
  profileDetails: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getData();
    //console.log(this.profileId);
    //console.log("view-profile screen",this._profileService.getItemById(this.profileId));
  }

  getData() {
    this.profileDetails = this._profileService.getItemById(this.profileId);
  }
}
