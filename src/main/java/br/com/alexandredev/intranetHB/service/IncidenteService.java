package br.com.alexandredev.intranetHB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.alexandredev.intranetHB.model.IncidentesModel;
import br.com.alexandredev.intranetHB.repository.IncidenteRepository;

@Service
public class IncidenteService {

	@Autowired
	private IncidenteRepository repository;
	
	// Retorna todas as ocorrências
	public List<IncidentesModel> findAll(){
		return repository.findAll();
	}
	
	// Retorna o incidente pelo id
	public IncidentesModel findById(Integer id) {
		return repository.findById(id).get();
	}
	
	// Grava um incidente
	public void save (IncidentesModel incidente) {
		repository.save(incidente);
	}
	
	// Exclui o incidente
	public void delete (Integer id) {
		repository.deleteById(id);
	}
}
