import { IUser } from "../interfaces/IUser";


export class User implements IUser{
    id: number;
    name!: string ;
    lastName!: string;
    age!: number;
    email!: string;
    telephone!: string;
    region!: string;
    parent!: number;
    

    constructor(){
        this.id= 0;
        this.name= '';
        this.lastName= '';
        this.age= 12;
        this.email= '';
        this.telephone= '';
        this.region= '';
        this.parent= 0;
    }
}