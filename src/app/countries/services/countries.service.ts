import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1'
  
    http = inject(HttpClient);

    

    constructor(){
        this.loadFromLocalStorage();

    }

    private isClient(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }

    
    public cacheStore: CacheStore = {
        byCountries: { term : '', countries: [] },
        byRegion: { region: '', countries: [] }
    }



    private saveToLocalStorage() {
            if(this.isClient()){
                localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ))

            }
    }


    private loadFromLocalStorage(){
            if(this.isClient()  && localStorage.getItem('cacheStore')) {

                this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
            }
            
        }



    private getCountriesRequest( url: string ): Observable<Country[]> {

        return this.http.get<Country[]>(url)
        .pipe(
            catchError(() => of([])),
        )
    }



    searchCountry( term: string ): Observable<Country[]> {

        const url = `${this.apiUrl}/name/${term}`
        
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byCountries = { term , countries }),
            tap( () => this.saveToLocalStorage() ),
        )       
    } 


    searchRegion( region: Region ): Observable<Country[]> {

        const url = `${this.apiUrl}/region/${ region }`
        
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byRegion = { region: region , countries: countries }),
            tap( () => this.saveToLocalStorage() ),
        )      
    } 


    searchCountryByAlphaCode( code: string ): Observable< Country | null >{
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map( countries => countries.length > 0 ? countries[0]: null),
            catchError(() => of(null))
        );
    }


    
}