import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../../services/userservice/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide=true
  loginForm!: FormGroup;

  constructor(private route:Router, private  formBuilder:FormBuilder, private userService:UserService) { }

  auth:boolean=true;



public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }

  register()
  {
    this.route.navigate(['register']);
  }
 
 
  loginUser(loginform:any) {
    let reqData = {
      email: loginform.email,
      password: loginform.password

    }
    console.log(reqData);
    this.userService.login(reqData).subscribe((response)=>{
      console.log("login sucessfull",response)
      this.route.navigate(['dashboard'])
    })
    
  }

  toggleStatus(){
    this.auth=!this.auth;
  }
}
 
