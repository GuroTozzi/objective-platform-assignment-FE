
import { Component, Input, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-beers',
    templateUrl: './beers.component.html',
    styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit{
    public beers:any[] = [];
    faSearch = faSearch;
    @Input("descriptionSearch") descriptionSearch = "";
    @Input("nameSearch") nameSearch = "";
    totalRecords: number;
    page:number;

    constructor(private bService: BeersService){
        this.descriptionSearch = "";
        this.nameSearch = "";
        this.totalRecords = this.beers.length;
        this.page = 1;
    }

    getBeers(){
        this.bService.getBeers().subscribe((resp:any) =>{
            this.beers = resp;
            this.totalRecords = this.beers.length;
        });
    }

    ngOnInit(){
        this.getBeers();
    }

    getFavouriteBeers(){
        this.bService.getFav().subscribe((resp:any) =>{
            this.beers = resp;
            this.totalRecords = this.beers.length;
        });
    }

    getBeersByDescription(){
        this.bService.getBeersByDescription(this.descriptionSearch).subscribe((resp:any) =>{
            this.beers = resp;
            this.totalRecords = this.beers.length;
            this.descriptionSearch = "";
        });
    }

    getBeersByName(){
        this.bService.getBeersByName(this.nameSearch).subscribe((resp:any) =>{
            let arr=[]
            if(resp && resp.length > 0){
                arr.push(resp)
            }
            this.beers = arr;
            this.totalRecords = this.beers.length;
            
            this.nameSearch="";
        });
    }
}