package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Bareme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBareme;

    @ManyToOne
    private IPM_Prestation ipm_prestation;
}
