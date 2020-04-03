import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [MatCardModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '', component: LoginComponent
    }]),
    CommonModule
  ]
})
export class LoginModule { }
