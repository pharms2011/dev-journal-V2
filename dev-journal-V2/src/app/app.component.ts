import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {LeftNavService} from './modules/core/services/left-nav-service/left-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dev-journal-V2';


  @ViewChild('leftNav')public leftNav: MatSidenav;

  constructor(private leftNavService: LeftNavService) {}

  ngOnInit() {
    console.log('AppComponent:');
    console.log(this.leftNav);
    this.leftNav.open();
    this.leftNavService.setLeftNav(this.leftNav);
  }
}
