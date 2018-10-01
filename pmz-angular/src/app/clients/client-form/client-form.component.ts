import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client/client';
import { ClientService } from '../client/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;

  id: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['clientId'];
    });

    if(this.id){
      this.clientService.clientById(this.id).subscribe(client => {
        this.id = client.id;
        this.clientForm.patchValue({
          
          name: client.name,
          register: client.register,
      });
      });
    }

    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      register: [true]
    });
  }

  save(){

    if(this.id){

      const dados = this.clientForm.getRawValue();

      let client: Client = new Client();

      client.id = this.id;
      client.name = dados.name;
      client.register = dados.register;
  
      this.clientService.update(client).subscribe(()=>{ this.router.navigate(['/clientes/u'])});
      this.clientForm.reset();

    }else{

      const dados = this.clientForm.getRawValue();

      let client: Client = new Client();
  
      client.name = dados.name;
      client.register = dados.register;
  
      this.clientService.save(client).subscribe(()=>{ this.router.navigate(['/clientes/s'])});
      this.clientForm.reset();

    }

  }


}
