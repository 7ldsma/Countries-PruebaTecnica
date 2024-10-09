import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';
import CountriesCompComponent from './countries/countries-comp.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';

export const routes: Routes = [

    {
        path: 'countries', 
        title: 'Countries',
        loadComponent: () => import('./countries/countries-comp.component'),
        children: [

            {
                path: 'all',
                title: 'Find a Country',
                component: ByRegionComponent
            },
            {
                path: 'by/:id',
                component: CountryPageComponent
            }
        ]
    },

    {
        path: 'home', 
        title: 'Home',
        component: HomePageComponent
    },
    {
        path: 'about', 
        title: 'About',
        component: AboutPageComponent
    },
    {
        path: 'contact', 
        title: 'Contact',
        component: ContactPageComponent
    },

    {
        path: '**', redirectTo: 'countries/all', pathMatch: 'full'
    },
];


