package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Statut_Bon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStatutBon;
    private String statutBon;

    @ManyToOne
    private IPM_Bon ipm_bon;
}
