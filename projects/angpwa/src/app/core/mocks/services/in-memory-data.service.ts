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
          name: 'Stiedemann',
          imageUrl:'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/1"   //real would be api/copycats/houses/{houseId}/details
          }
        },
        {
          id:2,
          name: 'Thiel',
          imageUrl:'https://images.unsplash.com/flagged/photo-1563891615762-0f4dfc63cc14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3680&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/2"
          }
        },
        {
          id:3,
          name: 'Will - Swift',
          imageUrl:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/3"
          }
        },
        {
          id:4,
          name: 'VonRueden Group',
          imageUrl:'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2253&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/4"
          }
        },
        {
          id:5,
          name: 'Quigley - Eichmann',
          imageUrl:'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/5"
          }
        },
        {
          id:6,
          name: 'Romaguera, Hammes and Terry',
          imageUrl:'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/6"
          }
        },
        {
          id:7,
          name: 'Stokes, Ryan and McGlynn',
          imageUrl:'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/7"
          }
        },
        {
          id:8,
          name: 'Auer, White and Predovic',
          imageUrl:'https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/8"
          }
        },
        {
          id:9,
          name: 'Kassulke - Schneider',
          imageUrl:'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=954&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/9"
          }
        },
        {
          id:10,
          name: 'Cape Verde',
          imageUrl:'https://images.unsplash.com/photo-1570057633712-870fa818fa15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/10"
          }
        },
        {
          id:11,
          name: 'Toys',
          imageUrl:'https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1456&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/11"
          }
        },
        {
          id:12,
          name: 'Smitham and Sons',
          imageUrl:'https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/12"
          }
        },
        {
          id:13,
          name: 'Veum - Kling',
          imageUrl:'https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/13"
          }
        },
        {
          id:14,
          name: 'Hermiston, Walker and Rohan',
          imageUrl:'https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/14"
          }
        },
        {
          id:15,
          name: 'Howell - Block',
          imageUrl:'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/15"
          }
        },
        {
          id:16,
          name: 'Skiles - Schiller',
          imageUrl:'https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/16"
          }
        },
        {
          id:17,
          name: 'Hane - Gislason',
          imageUrl:'https://images.unsplash.com/photo-1566908829550-e6551b00979b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/17"
          }
        },
        {
          id:18,
          name: 'Heathcote, Gleichner and Ondricka',
          imageUrl:'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/18"
          }
        },
        {
          id:19,
          name: 'Wisoky, Howell and Gibson',
          imageUrl:'https://images.unsplash.com/photo-1515592559813-3f7dff97e185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/19"
          }
        },
        {
          id:20,
          name: 'Schulist Inc',
          imageUrl:'https://images.unsplash.com/photo-1582200585336-3fda1b3c7abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80∏',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/20"
          }
        },
        {
          id:21,
          name: 'Wintheiser and Sons',
          imageUrl:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/21"
          }
        },
        {
          id:22,
          name: 'Lynch, Mayer and Little',
          imageUrl:'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2246&q=80',
          imageIsSquare: true,
          links:{
            getDetails: "api/details/22"
          }
        },
        {
          id:23,
          name: 'Gutkowski, Beier and Toy',
          imageUrl:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          imageIsSquare: false,
          links:{
            getDetails: "api/details/23"
          }
        },
      ];
      return {
        houses: houses,
        // images: images,
        // details: details
      };
    }

    genId(houses: House[]): number {
      return houses.length > 0 ? Math.max(...houses.map(hero => hero.id)) + 1 : 11;
    }
}
