import { Component, OnInit } from '@angular/core';
import { PowerhouseApiService } from 'projects/angpwa/src/app/core/http/copycats/powerhouse/powerhouse-api.service';
import { House } from 'projects/angpwa/src/app/shared/models/copycats/powerhouse/house';

@Component({
  selector: 'app-powerhouse',
  templateUrl: './powerhouse.component.html',
  styleUrls: ['./powerhouse.component.sass']
})
export class PowerhouseComponent implements OnInit {

  public houses: House[] = [];

  constructor(private powerhouseAPI: PowerhouseApiService) { }

  ngOnInit(): void {
    this.powerhouseAPI.GetHouses().subscribe(houses => {
      console.log(houses);
      this.houses = houses;
    });
  }

}
