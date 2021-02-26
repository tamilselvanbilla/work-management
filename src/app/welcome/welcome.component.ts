import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  signUpForm: any;
  otpPage: boolean = false;

  constructor(private fb: FormBuilder, private service: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.initialFormLoading();
  }

  initialFormLoading() {
    this.signUpForm = this.fb.group({
      emailId: ['', Validators.required]
    })
  }

  submitEmail() {
    if (this.signUpForm.invalid) {
      return
    }
    this.otpPage = true;
    var url = "/auth/sendOtp";
    this.service.postService(url, this.signUpForm.value).subscribe(res => {
      if (res.status == 200) {
      }
    }, error => {
      console.log('OTP sent failure', error);
    })
  }

  otpSubmit(otp) {
    console.log('otp', otp);
    if (otp.length !== 6) {
      return
    }
    this.router.navigate(['/setup'])
    var data = { otp: otp }
  }
}
