import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { House } from '../../../shared/models/copycats/powerhouse/house';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb(){
      const houses: House[] = [
        {
          id:1,
          name: 'Stiedemann Inc',
          imageSource: '../../mocks/files/powerhouse/house1.jpeg'
        },
        {
          id:2,
          name: 'Thiel Inc',
          imageSource: '../../mocks/files/powerhouse/house1.jpeg'
        }
      ];
      return {houses};
    }

    genId(houses: House[]): number {
      return houses.length > 0 ? Math.max(...houses.map(hero => hero.id)) + 1 : 11;
    }
}
