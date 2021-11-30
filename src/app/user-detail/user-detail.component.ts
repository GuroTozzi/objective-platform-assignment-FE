import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from "../classes/User";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{
  private userCopy: User | undefined;
  private __user: User | undefined;
  
  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user(){
    return this.__user!;
  }

  @Output('showFormDetails') showFormDetails = new EventEmitter();
  @Output('hideDetails') hideDetails = new EventEmitter();
  @Output('onResetPanel') onResetPanel = new EventEmitter();

  constructor(private userService: UserService) { }

  updateOrAddUser(){
    if(this.user!.id > 0){
      this.userService.updateUser(this.user!);
    }else{
      this.userService.addUser(this.user!)
    }

    this.showFormDetails.emit(false);
  }

  hidePanelDetails(){
    this.hideDetails.emit();
  }

  resetPanel(form:any){
    if(this.user!.id === 0){
      this.user = new User();
    }else{
      this.user = this.userCopy!;
    }
  }

  // sono un test

}
