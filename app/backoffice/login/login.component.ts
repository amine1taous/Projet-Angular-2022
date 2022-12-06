import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  message!: string
  constructor(private authService:AuthService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.nonNullable.group({
      username: ['', Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit() {
    this.authService.login(this.loginform.value['username'], this.loginform.value['password']).subscribe(user => {
 
        this.router.navigate(['admin/dash/acceuil']);
      }
    
    );
  }

}
