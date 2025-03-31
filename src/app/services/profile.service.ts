import { Injectable } from '@angular/core';
import data from '../../../public/assets/data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  public profileData:any=data;
  public profileDataSub:any;
  constructor(private _http:HttpClient) { }

  // getAllData(){
  //   this._http.get<any>("../../../public/assets/data.json").subscribe((data)=>
  //     this.profileDataSub = data
  //   )
  //   return this.profileDataSub;
  // }

  getItemById(id:any){    
    return this.profileData.data.filter((item:any)=>item.id==id);  
  }
}
