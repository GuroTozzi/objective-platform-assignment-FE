import { Injectable } from "@angular/core";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {
        users: User[] = [
            {
                id: 1,
                name : 'Alessandro',
                lastName: 'Tozzi',
                age: 27,
                email: 'v.alessandro.tozzi@gmail.com',
                telephone : '+393295891584',
                region: 'Amsterdam',
                parent: 0
            },
            {
                id: 2,
                name : 'Marco',
                lastName: 'Polito',
                age: 28,
                email: 'marco.polito@gmail.com',
                telephone : '+393289989854',
                region: 'Amsterdam',
                parent: 1
            },
            {
                id: 3,
                name : 'Eleonora',
                lastName: 'Tozzi',
                age: 32,
                email: 'eleonora.tozzi@gmail.com',
                telephone : '+393297810738',
                region: 'Puglia',
                parent: 1
            },
            {
                id: 4,
                name : 'stefania',
                lastName: 'Tozzi',
                age: 33,
                email: 'Stefania.tozzi@gmail.com',
                telephone : '+393208864886',
                region: 'Emilia Romagna',
                parent: 2
            },
        ]

        getUsers(){
            return this.users;
        }
    
        deleteUser(user:User){
            const index = this.users.indexOf(user)
            if(index > -1){
                this.users.splice(index, 1);
            }
        }

        updateUser(user: User ) {
            const idx = this.users.findIndex((u) => u.id === user.id);
            if(idx !== -1){
                this.users[idx] = user;
            }
        }

        addUser(user: User) {
            this.users.push(user);
        }
    }

