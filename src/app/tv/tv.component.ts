import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // to save the current page and when refresh use this key to redirect to this
    localStorage.setItem('currPage', 'tv')
  }

}
