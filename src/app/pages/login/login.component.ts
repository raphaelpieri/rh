import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({
      usuario:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit(){
    this.router.navigateByUrl('/home');
  }

}
