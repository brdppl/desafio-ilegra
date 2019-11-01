import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ilegra\'s Challenge';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(ev => {
      if (!(ev instanceof NavigationStart)) {
        $('body').addClass('animated fadeIn');
        if ($('body').hasClass('animated fadeIn')) {
          setTimeout(() => {
            $('body').removeClass('animated fadeIn');
          }, 1000);
        }
      }
    });
  }
}
