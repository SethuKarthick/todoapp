import { Component, OnInit } from '@angular/core';

// user imports 
import { ToastrService, ToastrComponentlessModule } from 'ngx-toastr';

import { AppService } from '../../app.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public validationToken : any ;
  public password : any;
  public confirmPassword : any ;

  constructor(
    public _route :ActivatedRoute,
    public router : Router,
    private toastr : ToastrService,
    public appService : AppService
  ) { }

  ngOnInit() {
    this.validationToken = this._route.snapshot.paramMap.get('validationToken');
  }

  public goToSignIn(): any {
    this.router.navigate(['/user/login']);
  }//end of goToSign function

  public updatePasswordFunction (): any {
    if (!this.validationToken){
      this.toastr.warning("Please enter your which is sent over email")
    }
    if (!this.password){
      this.toastr.warning("Password is required ")
    }
    if (!this.confirmPassword){
      this.toastr.warning("Confirm Password is required")
    }
    if (this.password != this.confirmPassword) {
      this.toastr.warning("Password doesn't match", "Warning!");
    } else {
      let data = {
        validationToken : this.validationToken,
        password : this.password,
      }
      console.log(data);
      this.appService.updatePassword(data).subscribe((apiResponse)=>{
        if(apiResponse == 200){
          this.toastr.success("Please login now, your has updated");
          setTimeout(()=>{
            this.goToSignIn();
          }, 1000)
        } else {
          this.toastr.error(apiResponse.message, "Error !");
        }
      },(error)=>{
        if (error.status == 404) {
          this.toastr.warning("Password Update failed", "Please request another password reset!");
        }
        else {
          this.toastr.error("Some Error Occurred", "Error!");
          this.router.navigate(['/serverError']);

        }
      } ); // 
    }

  } //updatePasswordFunction end 



}
