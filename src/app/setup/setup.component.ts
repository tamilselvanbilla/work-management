import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  passwordPage: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.passwordPage = true;
  }


  complete() {
    this.router.navigate(['/login']);
  }
}
