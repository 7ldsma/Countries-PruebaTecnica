import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'countries-by-region',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountriesTableComponent
],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public initialValue: Region = '';

  constructor( private countriesService: CountriesService){}


  ngOnInit(): void {
    this.getAllCountries();

    const cachedCountries = this.countriesService.cacheStore.byRegion.countries;

    if( cachedCountries && cachedCountries.length > 0 ) {
      this.countries = cachedCountries;
    }
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }


  getAllCountries(): void {
    this.selectedRegion = undefined;
    this.countriesService.getAllCountries()
      .subscribe(countries => {
        this.countries = countries;
      });
      console.log('hola', this.countries)
  }


  seachByRegion(region: Region):void {

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
    .subscribe(countries => {
      this.countries = countries;
    })

  }


  seachByCountry(term: string):void {
    this.countriesService.searchCountry( term )
    .subscribe(countries => {
      this.countries = countries;
    })
  }


}
