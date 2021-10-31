import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BeersService implements OnInit{
    private APIURL = 'http://localhost:8080';
    constructor(private http: HttpClient){

    }

    ngOnInit(){
        
    }

    getBeers(){
        return this.http.get(this.APIURL + '/beer/all');
    }

    setFav(idBeer:number){
        return this.http.patch(this.APIURL + `/beer/favourite/${idBeer}`,{}).subscribe(res=>{
            
        });
    }

    getFav(){
        return this.http.get(this.APIURL + '/beer/favourites');
    }

    getBeersByName(name:string){
        let params = new HttpParams().set("name", name)
        return this.http.get(this.APIURL + '/beer/byName', {params: params});
    }

    getBeersByDescription(description:string){
        let params = new HttpParams().set("description", description)
        return this.http.get(this.APIURL + '/beer/byDescription', {params: params});
    }
}