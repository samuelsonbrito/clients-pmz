import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "./client";

const API = 'http://localhost:8080/api';

@Injectable({
    providedIn:'root'
})
export class ClientService {
    
    constructor(private http: HttpClient){}

    listFromClient(){
        return this.http
        .get<Client[]>(`${API}/clients`);
    }

    save(client: Client){
        return this.http.post(`${API}/client`,client);
    }

    update(client: Client){
        return this.http.put(`${API}/client`,client);
    }

    delete(id: Number){
        return this.http.delete(`${API}/client/${id}`);
    }

    clientById(id: number){
        return this.http.get<Client>(`${API}/client/${id}`);
    }
}