import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css'
})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = [];



}
