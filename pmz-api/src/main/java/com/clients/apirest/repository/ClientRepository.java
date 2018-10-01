package com.clients.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clients.apirest.models.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
	Client findById(long id);

}
