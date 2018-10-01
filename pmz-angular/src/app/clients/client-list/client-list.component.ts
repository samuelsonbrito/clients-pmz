import { Component, OnInit } from '@angular/core';

import { Client } from '../client/client';
import { ClientService } from '../client/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  statusMessage: string;
  selectedTd: boolean = false;
  selectedRow : Number;
  setClickedRow : Function;
  
  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService, private activatedRoute: ActivatedRoute){
    this.setClickedRow = function(index){
      this.selectedRow = index;
    }
  }
  
  ngOnInit(): void{
    this.clientAll();
    this.route.params.subscribe(params => {
      this.statusMessage = params['status'];
    });

  }

  clientAll(){
    this.clientService.listFromClient()
    .subscribe(clients => this.clients = clients, err => console.log(err));
  }

  remove(id: Number){
    this.clientService.delete(id)
      .subscribe(() => {
         this.clientAll();
         this.router.navigate(['/clientes/r'])
      }, err => console.log(err));
  }

  

}
