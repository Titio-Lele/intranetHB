package br.com.alexandredev.intranetHB.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "tblIncidentes")
public class IncidentesModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@SequenceGenerator(name = "incidente_seq", sequenceName = "incidente_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "incidente_seq")
	private Integer id;
	
	@Column(nullable = false, length = 50)
	@NotEmpty(message = "Título é uma informação obrigatória")
	private String titulo;
	
	@Column(nullable = false, length = 2000)
	@NotEmpty(message = "Descrição é um campo necessário")
	private String descricao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
