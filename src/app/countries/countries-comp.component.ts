import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries-comp',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './countries-comp.component.html',
  styleUrl: './countries-comp.component.css'
})
export default class CountriesCompComponent {

}
