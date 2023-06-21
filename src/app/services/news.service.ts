import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'http://api.mediastack.com/v1/news';
  apiKey = '147861ddb48cc51b7055343e21e5de64';
  constructor(private http:HttpClient) { }
}
