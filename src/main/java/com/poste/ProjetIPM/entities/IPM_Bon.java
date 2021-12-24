package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class IPM_Bon implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idbon;
    //private String matricule_emp;
    //private String numero_carte;
    private String malade;
    private String service;
   // private Integer quantite;
   // private String designation;
    //private String prix_unitaire;
    private String total;
    private Date date_etablissement;

    @ManyToOne
    private IPM_Facture ipm_facture;

   /* @ManyToOne
    @JoinColumn(name = "ipm_bon")
    private IPM_Beneficiaire ipm_beneficiaire;*/

    @ManyToOne
    private IPM_Employe ipm_employe;

    @ManyToOne
    private IPM_Prestataire ipm_prestataire;

    @OneToMany(mappedBy = "ipm_bon")
    private List<IPM_Statut_Bon> ipm_statut_bons;
}
