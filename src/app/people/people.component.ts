import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // to save the current page and when refresh use this key to redirect to this
    localStorage.setItem('currPage', 'people');
  }

}
