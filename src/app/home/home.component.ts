import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpService, private router: Router) {

  }

  ngOnInit(): void {
  }

  contactMe() {
    this.router.navigate(['/contact'])
  }


}
