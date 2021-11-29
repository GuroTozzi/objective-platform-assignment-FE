import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm: boolean = false;
  selectedUser: User = new User();

  showDetails(user:User){
    this.showForm = true;
    this.selectedUser = user;
  }

  showFormDetails(show: boolean){
    this.showForm = false; 
  }

  addUser(){
    this.selectedUser = new User();
    this.showForm = true;
  }

  hideDetails(){
    this.showForm = false;
  }
}
