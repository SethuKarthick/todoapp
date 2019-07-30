import { Component, OnInit } from '@angular/core';

// user imports 
import { ActivatedRoute, Router } from '@angular/router';


import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public appService : AppService,
    public _router : ActivatedRoute,
    public router : Router,
    private toastr : ToastrService

  ) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  public forgotPassword() : any{
    if (!this.email.value){
      this.toastr.warning("Please enter the email address");
    } else if (this.email.hasError('email')){
      this.toastr.warning("Not a valid email", "Warning !")
    } else {
      let data = {
        email : this.email.value,
        
      }
      console.log(data);
      this.appService.resetPassword(data).subscribe((apiResponse) => {
        if(apiResponse.status == 200) {
          this.toastr.success("Reset Password", "Password reset instructions sent successfully");
        } else {
          this.toastr.error(apiResponse.message, "Error!");
        }
      },  (error)  =>{
        if(error.status == 404){
          this.toastr.warning("Reset Password Failed", "Email Not Found!");
        } else {
          this.toastr.error("Some Error Occurred", "Error!");
          this.router.navigate(['/serverError']);
        }
      }) ; // end of calling reset password
    }
  } // end of forgot password

}
