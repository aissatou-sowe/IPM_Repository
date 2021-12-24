package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Conjoint{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idconj;
    private String nom_conjoint;
    private String prenom_conjoint;

   @ManyToOne
   private IPM_Employe ipm_employe;
}
