package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idfacture;
    private String matricule;
    private String code_acte;
    private Integer tarification;
    private Integer part_patient;
    private Integer part_ipm;
    private Double taux_ipm;
    private Date date_facture;
    private Date date_saisie;
    private String montant_facture;

    @OneToMany (mappedBy = "ipm_facture")
    private List<IPM_Bon> ipm_bons;

    @ManyToOne
    @JoinColumn(name = "code_prestataire")
    private IPM_Prestataire ipm_prestataire;

    @OneToMany(mappedBy = "ipm_facture")
    private List<IPM_Statut_Facture> ipm_statut_factures;

}
