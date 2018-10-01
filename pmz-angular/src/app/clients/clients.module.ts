import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [ ClientComponent, ClientListComponent, ClientFormComponent ],
    imports: [
        HttpClientModule, 
        CommonModule, 
        RouterModule, 
        VMessageModule, 
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ClientsModule{}