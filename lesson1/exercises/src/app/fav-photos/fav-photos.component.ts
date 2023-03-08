import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Better Title LOL';
  image1 = 'https://scontent-ord5-1.xx.fbcdn.net/v/t31.18172-8/1801276_439098666225400_2668229189492630531_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CW-MuRv-hbgAX81UxGV&_nc_oc=AQk0X8DERCRGnuBqI4tLUIjk3CAsY8gxFn02JFtIk0GMV4Y1CnZqZ_fhvuNMGHf8WIsG5a0kb9Kv18dlhl_BxCqG&_nc_ht=scontent-ord5-1.xx&oh=00_AfAleWvtLedfnrBZZkQdDfxiFVBhgdD_jVTZAot1d-HxLQ&oe=643052F8';
  image2 = 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
 

  constructor() { }

  ngOnInit() {
  }

}