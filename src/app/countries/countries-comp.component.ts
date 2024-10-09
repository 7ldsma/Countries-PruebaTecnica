import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-countries-comp',
  standalone: true,
  imports: [
    RouterModule,
    SidebarComponent
  ],
  templateUrl: './countries-comp.component.html',
  styleUrl: './countries-comp.component.css'
})
export default class CountriesCompComponent {

}
