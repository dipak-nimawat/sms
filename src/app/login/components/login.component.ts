import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    
      :host {
        display: flex;
        justify-content: center;
        margin-top: 100px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .button {
        display: flex;
        justify-content: flex-end;
      }
      mat-card.no-box-shadow.mat-card {
        box-shadow: none;
          background: none;
    }
    `,
  ],
})
export class LoginComponent implements OnInit {

  ngOnInit(){

  }
  form: FormGroup = new FormGroup({
    usr: new FormControl(''),
    pwd: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
