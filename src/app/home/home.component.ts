import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../movieapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  tvs: any[] = [];
  searchTerm: string = '';

  imgBasePath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MovieapiService: MovieapiService) { }

  ngOnInit(): void {

    // to save the current page and when refresh use this key to redirect to this
    localStorage.setItem('currPage', 'home');

    // to get trending of movies using movieapi.service
    this._MovieapiService.getTrending('movie').subscribe((response) => {
      this.movies = this.shuffleArray(response.results.slice(0, 10));
    });

    // to get trending of movies using movieapi.service
    this._MovieapiService.getTrending('tv').subscribe((response) => {
      this.tvs = this.shuffleArray(response.results.slice(0, 10));
    });
  }

  // to randomaize the moveis array //Explain???
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
