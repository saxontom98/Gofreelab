import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
 // loginForm!:Form
  constructor(private formBuilder:FormBuilder) { }

  loginForm=this.formBuilder.group({
    login:['',Validators.required],
    password:['',[Validators.required]]
    // fname:['',Validators.required],
    // lname:['', Validators.required],

    // email :['',Validators.required, Validators.email],
    // password:['',Validators.required],
    // position:['',Validators.required]
    
  })

  ngOnInit(): void {
  }
  submit(){}

}
