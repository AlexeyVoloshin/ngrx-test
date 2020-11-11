import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() formError: string;

  @Input() disabled: boolean;

  @Output() login = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    this.login.emit(form.value);
  }
}
