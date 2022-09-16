import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSrc = 'assets/img/IMG_20200602_173552.jpg'
  imageAlt = 'Profile Image'
  constructor() { }

  ngOnInit(): void {
  }

}
