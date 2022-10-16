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
  cvLink: string = "https://drive.google.com/file/d/1JoiotIc3tWfsCZIQh1w0xYrDLtWqJHBb/view?usp=sharing"

  constructor() { }

  ngOnInit(): void {
  }

}

