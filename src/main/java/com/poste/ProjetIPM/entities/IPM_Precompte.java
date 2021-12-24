package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Precompte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdPrecompte;

    @ManyToOne
    private IPM_Employe ipm_employe;
}
