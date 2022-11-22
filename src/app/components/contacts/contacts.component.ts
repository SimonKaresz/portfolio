import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactEmail: string = "mailto:kareszkaresz0706@gmail.com";
  contactMessenger: string = "http://m.me/karesz.simon";
  contactGitHub: string = "https://github.com/SimonKaresz";
  contactLinkedin: string = "https://www.linkedin.com/in/karesz-simon-5419a8247/";
  cvLink: string = "https://drive.google.com/file/d/1VQ6VbeVHZh5TeNV0rKnXnB_sXhgPn0UD/view?usp=sharing"

  constructor() { }

  ngOnInit(): void {
  }

}

