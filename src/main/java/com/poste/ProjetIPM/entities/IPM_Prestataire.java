package com.poste.ProjetIPM.entities;

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
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class IPM_Prestataire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long code_prestataire;
    private String nom_prestataire;
    private String adresse_prestatire;
    private String email;
    private String raison_social;
    private String telephone;
    private String fax;
    private String code_categorie_pretataire;
    private Boolean nature;

    @OneToMany (mappedBy = "ipm_prestataire")
    private List<IPM_Facture> ipm_factures;

    @OneToMany (mappedBy = "ipm_prestataire")
    private List<IPM_Prestation> ipm_prestations;

    @OneToMany(mappedBy = "ipm_prestataire")
    private List<IPM_Bon> ipm_bons;
}
