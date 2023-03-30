import { Component } from '@angular/core';

import { Person } from '../Person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submitted = false;

  onSubmit() {
    this.submitted = !this.submitted;
  }

  model = new Person(
    1, 
    '', 
    '', 
    '',
    '',
    '')
}