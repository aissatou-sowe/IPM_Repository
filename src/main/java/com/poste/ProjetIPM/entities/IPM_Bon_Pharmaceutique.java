package com.poste.ProjetIPM.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
//@AllArgsConstructor
//@NoArgsConstructor
@PrimaryKeyJoinColumn(name = "idbon")
public class IPM_Bon_Pharmaceutique extends IPM_Bon {


    private Integer quantite;
    private String designation;
    private Integer prix_unitaire;
    private String suivant_ordonnance_docteur;
}
