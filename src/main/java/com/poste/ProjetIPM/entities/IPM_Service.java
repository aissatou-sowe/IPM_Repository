package com.poste.ProjetIPM.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idService;
    private String type_service;
    private String code_service;

    @JsonIgnore
    @OneToMany(mappedBy = "ipm_service")
    private List<IPM_Employe> ipm_employes;

    @ManyToOne
    private IPM_Entity ipm_entity;

    @JsonIgnore
    @OneToMany(mappedBy = "ipm_service")
    private List<IPM_Utilisateur> ipm_utilisateurs;
}
