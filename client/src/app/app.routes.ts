import { Routes } from '@angular/router'
// component
import { BaseConverterComponent } from '@/app/features/base-converter/base-converter.component'
import { PageNotFoundComponent } from '@/app/features/page-not-found/page-not-found.component'

export const routes: Routes = [
    {path: '', component: BaseConverterComponent},
    {path: 'base-converter', component: BaseConverterComponent},
    {path: '**', component: PageNotFoundComponent},
];
