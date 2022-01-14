import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthen = false
  constructor(private router: Router) {

  
   }

  ngOnInit(): void {
    this.isAuthen = localStorage.getItem('item') ? true: false
  }
  logout(){
    localStorage.removeItem('item')

    this.router.navigateByUrl('/login');
  }
}
