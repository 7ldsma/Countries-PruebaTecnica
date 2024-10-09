import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  public country?: Country;


  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router
      ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode(id))
    )
    .subscribe( country => {
      if( !country ){
        return this.router.navigateByUrl('');
      }

      return this.country = country;

      })

  }


}
