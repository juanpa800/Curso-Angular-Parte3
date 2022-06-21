import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Curso Angular Parte 3';
  message: string = "";
  userName: string = "";
  password: string = "";
  registeredUsers: string[] = []; //declare type of array, default is never
  passwordList: string[] = [];


  LogIn(): string {
    if (this.passwordList[this.registeredUsers.indexOf(this.userName)] == this.password) {
      this.message = "Log In complete";
    }
    else {
      this.message = "Incorrect user or password"
    }
    return "0";
  }

  SignIn() {
    if ((this.registeredUsers).includes(this.userName)) {
      this.message = "User " + this.userName + " already exist";
    }
    else {
      this.registeredUsers.push(this.userName);
      this.passwordList.push(this.password);
      this.message = "User " + this.userName + " Sign in";

    }
  }
}
