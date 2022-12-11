import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieapiService } from '../movieapi.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id: string | null = '';
  mediaType: string | null = '';
  mediaDetail: any;
  imgBasePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute, private _MovieapiService: MovieapiService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.mediaType = this._ActivatedRoute.snapshot.paramMap.get('mediaType');
    // to save the current page and when refresh use this key to redirect to this
    localStorage.setItem('currPage', `moviedetails/${this.mediaType}/${this.id}`);
    
    // to get mediadetails 
    this._MovieapiService.getMediaDetails(this.mediaType, this.id).subscribe((res) => {
      this.mediaDetail = res
    console.log(this.mediaDetail)
    })

  }

  

}
