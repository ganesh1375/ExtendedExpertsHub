import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/Service/database.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidEmail: any = false;
  constructor(private service:DatabaseService) { }
  
  loginForm:FormGroup;

  ngOnInit(): void {
    $(document).ready(() => {
      //alert('I am Called From jQuery');
      // $(window).on("load", function () {
      $(".loader-wrapper").fadeOut(1000);
      //});
    });
  
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required/*,Validators.minLength(8)*/])
    })

  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  async signIn(){
    let email = this.email.value;
    email = email.toString()
    console.log(email);
    
    let docs,count=0;
    
    await this.service.get().subscribe(res=>{
      docs = res;
      console.log(docs);
      
      for (const doc of docs) {
        if(email === doc.email){
          count++;
          break;
        }
        console.log(doc.email);
      }
      if(count == 0){
        console.log("email not exits");
        this.invalidEmail = true;
        
      }
      else{
        console.log("email exits");
        this.invalidEmail = false;
      }
    });

  }

}
