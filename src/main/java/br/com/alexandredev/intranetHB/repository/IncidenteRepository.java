package br.com.alexandredev.intranetHB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.alexandredev.intranetHB.model.IncidentesModel;

@Repository
public interface IncidenteRepository extends JpaRepository<IncidentesModel, Integer>{

}
