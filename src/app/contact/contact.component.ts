import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { constant } from '../shared/constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSuccess: boolean = false;
  submitting: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")],
      subject: [''],
      message: ['', Validators.required]
    })
  }

  closePopup(){
    this.isSuccess = false;
  }

  sendMail() {
    this.submitting = true;
    let objParam = {
      from: this.contactForm.controls['email'].value,
      to: constant.EMAIL,
      subject: this.contactForm.controls['subject'].value + " ( " + this.contactForm.controls['name'].value + " ) ",
      text: this.contactForm.controls['message'].value + "\n Email from :: " + this.contactForm.controls['email'].value
    }
    this.isSuccess = true;
    this.http.sendEmail("https://us-central1-nodeandmail.cloudfunctions.net/app/sendEmail", objParam).subscribe(
      (data: any) => {
        if (data.status == 200) {
          this.isSuccess = true;
          this.contactForm.reset();
          this.submitting = false;
        }
      },
      err => {
        console.log(err);
        this.submitting = false;
      }
    );
  }

  
}
