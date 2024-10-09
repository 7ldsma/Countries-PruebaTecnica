import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import CountriesCompComponent from '../../../countries/countries-comp.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    CountriesCompComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public menuItems = routes
  .map( route => route ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes('countries'))
  .filter( route => !route.path?.includes('**') );



  public countryItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes(':'));  
}
