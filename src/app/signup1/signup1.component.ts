import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class signup1Component{
  title='signup'

  constructor(private formBuilder:FormBuilder) { }

  submitted=false;
  signupForm=this.formBuilder.group({
    id:['',[Validators.required]],
    fname:['',Validators.required],
    lname:['', Validators.required],

    email :['',Validators.required, Validators.email],
    password:['',Validators.required],
    position:['',Validators.required]
    
  })
  get f(){
    return this.signupForm.controls
  }
  submit(){
    console.log(this.f);
  
  }
}