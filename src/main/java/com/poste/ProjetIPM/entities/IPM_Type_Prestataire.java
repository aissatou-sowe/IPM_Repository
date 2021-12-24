package com.poste.ProjetIPM.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class IPM_Type_Prestataire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_type_prestataire;
    private String libelle;
}
