import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outer-header',
  templateUrl: './outer-header.component.html',
  styleUrls: ['./outer-header.component.scss']
})
export class OuterHeaderComponent implements OnInit {
  activeRoute = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.activeRoute = this.route.url;
  }

  loginRoute() {
    this.route.navigate(['/login']);
  }
}
