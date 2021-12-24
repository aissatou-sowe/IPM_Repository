package com.poste.ProjetIPM.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Categorie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long code_categorie;
    private String libelle;
    private String montant;
    private String echalonnage;

    /*@ManyToOne
    private IPM_Cotisation ipm_cotisation;*/
    @JsonIgnore
    @OneToMany(mappedBy = "ipm_categorie")
    private List<IPM_Employe> ipm_employes;


}
