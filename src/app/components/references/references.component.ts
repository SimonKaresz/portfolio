import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  porfolio = {
    ref_p_img: "assets/img/ref_p01.png",
    alt: "porfolio image",
    github_pages: "https://simonkaresz.github.io/portfolio/introduction",
    github_code: "https://github.com/SimonKaresz/portfolio",
  }

  sample01 = {
    ref_tda_img: "assets/img/ref_tda01.png",
    alt: "to do app image",
    github_pages: "https://simonkaresz.github.io/to_do_app_static/main",
    github_code: "https://github.com/SimonKaresz/to_do_app_static",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
