import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../classes/User";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-users',
    templateUrl : './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent{
    public users:User[] = [];
    @Output('onUpdateUserParent') userUpdated = new EventEmitter<User>();

    constructor(private userService: UserService){
        this.users = userService.getUsers();
    }

    onDeleteUserParent(user:User){
        this.userService.deleteUser(user);
    }

    UpdateUser(user:User){
        // con assign crei un oggetto a partire da un altro
        this.userUpdated.emit(Object.assign({}, user));
    }
}