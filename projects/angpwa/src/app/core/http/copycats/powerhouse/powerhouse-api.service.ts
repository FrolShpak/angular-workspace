import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { House } from 'projects/angpwa/src/app/shared/models/copycats/powerhouse/house';

@Injectable({
  providedIn: 'root'
})
export class PowerhouseApiService {

  private housesUrl = 'api/houses'; //real would be api/copycats/houses/

  constructor(
    private http: HttpClient) { }

  public GetHouses(): Observable<House[]>{
    return this.http.get<House[]>(this.housesUrl)
  }

  public GetHouseDetails(){

  }
}
