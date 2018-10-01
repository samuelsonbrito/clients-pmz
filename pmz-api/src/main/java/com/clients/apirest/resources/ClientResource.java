package com.clients.apirest.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clients.apirest.models.Client;
import com.clients.apirest.repository.ClientRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/api")
@Api(value="API REST Clientes")
public class ClientResource {
	
	@Autowired
	ClientRepository clientRepository;
	
	@ApiOperation(value="Retorna uma lista de Clientes")
	@GetMapping("/clients")
	public List<Client> findAllClients(){
		return clientRepository.findAll();
	}
	
	@ApiOperation(value="Retorna um cliente unico")
	@GetMapping("/client/{id}")
	public Client findClientById(@PathVariable(value="id") long id){
		return clientRepository.findById(id);
	}
	
	@ApiOperation(value="Salva um cliente")
	@PostMapping("/client")
	public Client saveProduto(@RequestBody @Valid Client client) {
		return clientRepository.saveAndFlush(client);
	}
	
	@ApiOperation(value="Deleta um cliente")
	@DeleteMapping("/client/{id}")
	public void removeClient(@PathVariable(value = "id") Long clientId) {
		clientRepository.deleteById(clientId);
	}
	
	@ApiOperation(value="Atualiza um cliente")
	@PutMapping("/client")
	public Client updateClient(@RequestBody @Valid Client client) {
		return clientRepository.saveAndFlush(client);
	}
	 

}
