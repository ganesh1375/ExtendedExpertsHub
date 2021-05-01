import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/Service/database.service';
import { passwordValidators } from '../Validators/password.validators';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:DatabaseService) { }
  registerForm:FormGroup;
  isEmailExist:boolean = false;

  get firstname(){
    return this.registerForm.get('firstname')
  }
  get lastname(){
    return this.registerForm.get('lastname')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword')
  }
  get register(){
    return this.registerForm;
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname :new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required]),
      phoneNo:new FormControl('')
    },{ validators: passwordValidators});
    $(document).ready(() => {
      //alert('I am Called From jQuery');
      // $(window).on("load", function () {
      $(".loader-wrapper").fadeOut(1000);
      //});
    });
  }
  onSubmit(){
    let email = this.email.value;
    let docs;
    // this.service.get().subscribe(res=>{
    //   docs = res;
    //   let count =0;
            
    //   for (const doc of docs) {
    //     if(email == doc.email){
    //       count++;
    //       break;
    //     }
    //   }
    //   if(count == 0){
    //     console.log("email not exits");
    //     this.isEmailExist = false;
    //   }
    //   else{
    //     console.log("email exits");
    //     this.isEmailExist = true;
    //   }
    // });
    this.service.enroll(this.registerForm.value).subscribe(res=>{
      console.log("data added succesfuuly");
      
    },err=>{
      console.log(err);
      
    });

  }

}
