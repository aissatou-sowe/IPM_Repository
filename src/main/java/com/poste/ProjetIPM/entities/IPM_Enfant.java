package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Enfant{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idenf;
    private String nom_enfant;
    private String prenom_enfant;
    private Date date_nais_enfant;
    //private String lieu_nais_enfant;
    //private String sexe_enfant;

    @ManyToOne
    private IPM_Employe ipm_employe;
}

