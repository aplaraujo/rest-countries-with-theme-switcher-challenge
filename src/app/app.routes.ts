import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Countries Home Page'
    },
    {
        path: 'details/:alpha3Code',
        component: Details,
        title: 'Country Details Page'
    }
];
