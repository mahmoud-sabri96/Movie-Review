import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieapiService {


  constructor(private _HttpClient: HttpClient) { }

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50`);
  }

  getMediaDetails(mediaType:any,id: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50`)
  }


}
