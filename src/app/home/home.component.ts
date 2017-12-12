import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
      $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
      });
    });
  }
}
