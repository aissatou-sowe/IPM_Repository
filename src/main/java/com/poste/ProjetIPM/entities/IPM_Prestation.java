package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Prestation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long code_prestation;
    private String libelle;
    private Double taux_agrees;
    private Double taux_non_agrees;

    @ManyToOne
    private IPM_Prestataire ipm_prestataire;

    @OneToMany(mappedBy = "idBareme")
    private List<IPM_Bareme> ipm_baremes;
}
