import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb:FormBuilder, private AuthService:AuthService, private router:Router) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [''],
      password:['']
    })
  }
  onSubmit() {
    const { name, password } = this.formGroup.value
    this.formGroup.reset()
    this.AuthService.getUserDetails(name, password).subscribe(data => {
      if (data.message) {
        this.AuthService.setLoggedIn(true)
        this.router.navigate(['admin'])
      }
      else {
        alert('wrong info provided')
      }
    })
  }

}
