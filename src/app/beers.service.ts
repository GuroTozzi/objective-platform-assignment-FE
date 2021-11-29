import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OnInit } from '@angular/core';

// Creare un service o component da linea di comando:
//  ng g <service>/<component> <nome>


// indico che è iniettabile, 
// se lo voglio iniettare:

//      - A livello del componente, lo definisco nei providers del componente, 
//        ad ex dopo selector: inseriesco providers: [BeerService],
//        @Component({
//            selector: 'app-beer',
//            providers: [BeerService], (avendo importato beerservice)
//            templateUrl: './beer.component.html',
//            styleUrls: ['./beer.component.css']
//          })
//        ma se creo tanti componenti che iniettano il mio servizio avrò tanti oggetti di quel servizio

//      - A livello del modulo, lo definisco nei providers del modulo (ho un solo modulo per ora che è app.module.ts), 
//        @NgModule({
//           declarations: [
//             AppComponent,
//             BeersComponent,
//             BeerComponent
//           ],
//           imports: [
//             BrowserModule,
//             HttpClientModule,
//             FontAwesomeModule,
//             FormsModule,
//             NgxPaginationModule
//           ],
//           providers: [BeerService], (avendo importato beerservice)
//           bootstrap: [AppComponent]
//        })

//      - A livello del progetto, lo definisco qui nel service con:
//          @Injectable({
//              providedIn: 'root'
//          })
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

    setFav(idBeer:number, fav:boolean){
        return this.http.patch(this.APIURL + `/beer/favourite/${idBeer}/${fav}`,{}).subscribe(res=>{
            
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