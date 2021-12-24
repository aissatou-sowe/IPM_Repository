package com.poste.ProjetIPM.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import java.util.Date;

@Data
@Entity
//@AllArgsConstructor
//@NoArgsConstructor
@PrimaryKeyJoinColumn(name = "idbon")
public class IPM_Bon_Analyse_Laboratoire extends IPM_Bon {

    private String categorie_hospitalisation;
    private String motif;
}
