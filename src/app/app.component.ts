import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newproject';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passowrd: new FormControl('', [Validators.required])
  });


  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
