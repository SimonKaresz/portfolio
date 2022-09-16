import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio';

  ngOnInit(): void {
    $(document).ready(function () {
      $('.introduction').click(function () {
        $('.introduction').addClass('active');
        $('.studies, .skills, .references, .contacts').removeClass('active');
      });
      $('.studies').click(function () {
        $('.studies').addClass('active');
        $('.introduction, .skills, .references, .contacts').removeClass('active');
      });
      $('.skills').click(function () {
        $('.skills').addClass('active');
        $('.studies, .introduction, .references, .contacts').removeClass('active');
      });
      $('.references').click(function () {
        $('.references').addClass('active');
        $('.studies, .skills, .introduction, .contacts').removeClass('active');
      });
      $('.contacts').click(function () {
        $('.contacts').addClass('active');
        $('.studies, .skills, .references, .introduction').removeClass('active');
      });
    });
  }
}
