import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'clientes'
    },
    { path: 'clientes', component: ClientListComponent },
    { path: 'clientes/:status', component: ClientListComponent },
    { path: 'cliente/add', component: ClientFormComponent },
    {
        path: 'cliente/:clientId',
        component: ClientFormComponent
    },
    { path: '**', component: NotFoundComponent },
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}