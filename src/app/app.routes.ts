import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DepartamentComponent } from './departament/departament.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CountryUpdateComponent } from './country-update/country-update.component';
import { DepartamentUpdateComponent } from './departament-update/departament-update.component';
// import { MunicipalityUpateComponent } from './municipality-upate/municipality-upate.component';


export const routes: Routes = [
    { path: '', redirectTo: 'country', pathMatch: 'full' },
    {path: 'country',component: CountryComponent},
    { path: 'country-update/:id', component: CountryUpdateComponent},
    { path: 'departament', component: DepartamentComponent },
    { path: 'departament-update/:id', component: DepartamentUpdateComponent },
    { path: 'municipality', component: MunicipalityComponent },
    // { path: 'municipality-update/:id', component: MunicipalityUpateComponent},

];