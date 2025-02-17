import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  employees = [];
  dtOptions: any = {};  

  constructor() { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 25,
    //   processing: true
    // }; 
    // this.loadData();
  }

  loadData(){
    return [
     {
       "id": 860,
       "firstName": "Superman",
       "lastName": "Yoda"
     },
     {
       "id": 870,
       "firstName": "Foo",
       "lastName": "Whateveryournameis"
     },
     {
       "id": 590,
       "firstName": "Toto",
       "lastName": "Titi"
     },
     {
       "id": 803,
       "firstName": "Luke",
       "lastName": "Kyle"
     },
     {
       "id": 474,
       "firstName": "Toto",
       "lastName": "Bar"
     },
     {
       "id": 476,
       "firstName": "Zed",
       "lastName": "Kyle"
     },
     {
       "id": 464,
       "firstName": "Cartman",
       "lastName": "Kyle"
     },
     {
       "id": 505,
       "firstName": "Superman",
       "lastName": "Yoda"
     },
     {
       "id": 308,
       "firstName": "Louis",
       "lastName": "Kyle"
     },
     {
       "id": 184,
       "firstName": "Toto",
       "lastName": "Bar"
     },
     {
       "id": 411,
       "firstName": "Luke",
       "lastName": "Yoda"
     },
     {
       "id": 154,
       "firstName": "Luke",
       "lastName": "Moliku"
     },
     {
       "id": 623,
       "firstName": "Someone First Name",
       "lastName": "Moliku"
     },
     {
       "id": 499,
       "firstName": "Luke",
       "lastName": "Bar"
     },
     {
       "id": 482,
       "firstName": "Batman",
       "lastName": "Lara"
     },
     {
       "id": 255,
       "firstName": "Louis",
       "lastName": "Kyle"
     },
     {
       "id": 772,
       "firstName": "Zed",
       "lastName": "Whateveryournameis"
     },
     {
       "id": 860,
       "firstName": "Superman",
       "lastName": "Yoda"
     },
     {
       "id": 870,
       "firstName": "Foo",
       "lastName": "Whateveryournameis"
     },
     {
       "id": 590,
       "firstName": "Toto",
       "lastName": "Titi"
     },
     {
       "id": 803,
       "firstName": "Luke",
       "lastName": "Kyle"
     },
     {
       "id": 474,
       "firstName": "Toto",
       "lastName": "Bar"
     },
     {
       "id": 476,
       "firstName": "Zed",
       "lastName": "Kyle"
     },
     {
       "id": 464,
       "firstName": "Cartman",
       "lastName": "Kyle"
     },
     {
       "id": 505,
       "firstName": "Superman",
       "lastName": "Yoda"
     },
     {
       "id": 308,
       "firstName": "Louis",
       "lastName": "Kyle"
     },
     {
       "id": 184,
       "firstName": "Toto",
       "lastName": "Bar"
     },
     {
       "id": 411,
       "firstName": "Luke",
       "lastName": "Yoda"
     },
     {
       "id": 154,
       "firstName": "Luke",
       "lastName": "Moliku"
     },
     {
       "id": 623,
       "firstName": "Someone First Name",
       "lastName": "Moliku"
     },
     {
       "id": 499,
       "firstName": "Luke",
       "lastName": "Bar"
     },
     {
       "id": 482,
       "firstName": "Batman",
       "lastName": "Lara"
     },
     {
       "id": 255,
       "firstName": "Louis",
       "lastName": "Kyle"
     },
     {
       "id": 772,
       "firstName": "Zed",
       "lastName": "Whateveryournameis"
     }
     ];
   }
}
