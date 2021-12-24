package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Suivie_Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_suivie_facture;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "ipm_etat_facture",
            joinColumns = @JoinColumn(name = "idfacture"),
            inverseJoinColumns = @JoinColumn(name = "id_suivie_facture")
    )
    private List<IPM_Facture> ipm_factures;

}
