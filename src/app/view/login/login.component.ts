import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb :FormBuilder , private router: Router) { }
  loginFrom = this.fb.group({
    email : '',
    password : ''
  })
  ngOnInit(): void {
    if(localStorage.getItem('item') === 'value' || localStorage.getItem('item') !== null){
      this.router.navigateByUrl('/home');
    }
  }
  onSubmit(e : Event){
        e.preventDefault()
        const data = this.loginFrom.value

        if(data.email && data.password)
        {
          if(data.email === 'username' && data.password === '123123')
          {
            localStorage.setItem('item','value')
            this.router.navigateByUrl('/home');
          }

          else
          {
            alert('Wrong username or password')
          }
        }
        else
        {
          alert('Please input username and password')
        }
        
  }
}
