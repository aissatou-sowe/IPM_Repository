package com.poste.ProjetIPM.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Remboursement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRemboursement;
    private String montantRemboursement;
    private Date dateRemboursement;

    @ManyToOne
    private IPM_Employe ipm_employe;

}
