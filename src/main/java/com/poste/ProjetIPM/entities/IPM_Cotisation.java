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
public class IPM_Cotisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCotisation;
    private String cumul_cotisation;

    @ManyToOne
    private IPM_Employe ipm_employe;

    /*@OneToMany(mappedBy = "ipm_cotisation")
    private List<IPM_Categorie> ipm_categories;*/
}
