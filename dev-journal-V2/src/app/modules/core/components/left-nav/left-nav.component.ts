import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  routerLink: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Amazon Web Services',
  routerLink: 'Amazon-Web-Services'},
  {name: 'Angular',
    routerLink: 'Angular'},
  {name: 'Avro',
    routerLink: 'Avro'},
  {name: 'Azure',
    routerLink: 'Azure'},
  {name: 'C',
    routerLink: 'C'},
  {name: 'C#',
    routerLink: 'C-Sharp'},
  {name: 'Cassandra',
    routerLink: 'cassandra'},
  {name: 'CORS',
    routerLink: 'CORS'},
  {name: 'CSS',
    routerLink: 'CSS'},
  {name: 'Django',
    routerLink: 'django'},
  {name: 'ExtJS',
    routerLink: 'ExtJS'},
  {name: 'Flyway',
    routerLink: 'flyway'},
  {name: 'Git',
    routerLink: 'Git'},
  {name: 'Jaspersoft',
    routerLink: 'Jaspersoft'},
  {name: 'Java',
    routerLink: 'Java'},
  {name: 'JUnit',
    routerLink: 'JUnit'},
  {name: 'Kafka',
    routerLink: 'Kafka'},
  {name: 'Linux',
    routerLink: 'Linux'},
  {name: 'Mockito',
    routerLink: 'Mockito'},
  {name: 'NgRx',
    routerLink: 'NgRx'},
  {name: 'O-Auth2',
    routerLink: 'OAuth2'},
  {name: 'OOP Concepts',
    routerLink: 'OOP'},
  {name: 'PM2',
    routerLink: 'pm2'},
  {name: 'Sencha Touch',
    routerLink: 'Sencha'},
  {name: 'Python',
    routerLink: 'Python'},
  {name: 'ReactJs',
    routerLink: 'ReactJS'},
  {name: 'Spring Boot Admin',
    routerLink: 'Spring-Boot-Admin\''},
  {name: 'Spring',
    routerLink: 'Spring'},
  {name: 'Unity',
  routerLink: 'Unity'}
];

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router) { }

  ngOnInit() {}

}
