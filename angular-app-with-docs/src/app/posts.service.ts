import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  /**
   * 
   * @param httpClient Inject HttpClient
   */
  constructor(public httpClient: HttpClient) {

  }

  /**
   * Get Posts
   */
  getPosts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
