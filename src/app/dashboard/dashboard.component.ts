import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideNav: Boolean = false;
  loopValue = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
