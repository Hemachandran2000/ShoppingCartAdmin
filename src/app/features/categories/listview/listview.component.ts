import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.handleEvent();
  }

  public data = [
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
  ];

  handleEvent(): void {
    let iTime: number = 10000, subTimer: any;
    document.addEventListener("click", function () {
      
     if(subTimer){
       console.log(subTimer);       
       clearTimeout(subTimer);
       subTimer = null;      
     }

     subTimer = setTimeout(() => {
        console.log('Event clicked...');
      }, iTime);      
    });
  }

}
