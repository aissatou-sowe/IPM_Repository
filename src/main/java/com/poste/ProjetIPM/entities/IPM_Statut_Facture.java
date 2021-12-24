package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Statut_Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStatutFacture;
    private String statutFacture;

    @ManyToOne
    private IPM_Facture ipm_facture;
}
