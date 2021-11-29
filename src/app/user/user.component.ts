import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "../classes/User";

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @Input('user-data') user: User | undefined;
  // se non metti @Output puoi comunque generare un evento, ma non sarà gestibile all'esterno (dal padre).
  @Output('onDeleteUserSon') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor() { }

  updateUser(){
    this.onSelectUser.emit(this.user);
  }

  deleteUser(){
    this.userDeleted.emit(this.user);
  }
}
