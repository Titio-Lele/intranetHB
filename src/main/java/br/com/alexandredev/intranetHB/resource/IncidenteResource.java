package br.com.alexandredev.intranetHB.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.alexandredev.intranetHB.model.IncidentesModel;
import br.com.alexandredev.intranetHB.service.IncidenteService;

@CrossOrigin
@RestController
@RequestMapping(value = "/api")
public class IncidenteResource {

	@Autowired
	IncidenteService incidenteService;
	
	@GetMapping(value = "/")
	public List<IncidentesModel> listaIncidentes(){
		return incidenteService.findAll();
	}
	
	@PostMapping(value = "/insereIncidente")
	public void insereIncidente(@RequestBody IncidentesModel incidente) {
		incidenteService.save(incidente);
	}
	
	@GetMapping(value = "/incidente")
	public IncidentesModel incidenteUnico(@RequestParam Integer id) {
		return incidenteService.findById(id);
	}
	
	@DeleteMapping(value = "/incidente")
	public void removeIncidente(@RequestParam Integer id) {
		incidenteService.delete(id);
	}
}
