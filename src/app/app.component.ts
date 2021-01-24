import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  photos: any;

  constructor(private http: HttpClient) { }

  getPhotos(): any {
    this.photos = this.http.get(this.ROOT_URL + '/photos');
  }
}
