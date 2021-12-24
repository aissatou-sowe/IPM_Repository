package com.poste.ProjetIPM.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class IPM_Employe implements Serializable
 {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idemp;
    private String nom;
    private String prenom;
    private String sexe;
    private String matricule;
    private String numero_carnet;
    private String adresse_domicile;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date_nais;
    private String lieu_nais;
    private String telephone;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date_recrutement;
    private String situation_familial;
    private  String solde;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date_debut_suspension;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date date_fin_suspension;
    private String reference;
    private String cumul_charge;
    private String niveau_salarial;
    //private String sphoto;


    //public String getSphoto(){
       // return sphoto;
   // }
   // public void setSphoto(String sphoto){
       // this.sphoto= sphoto;
   // }

    //@OneToMany (mappedBy = "ipm_employe")
   // private List<IPM_Beneficiaire> ipm_beneficiaires;
   // public long getSid(){
       // return idemp;
   // }


     @JsonIgnore
    @OneToMany(mappedBy = "idCotisation")
    private List<IPM_Cotisation> ipm_cotisations;

     @JsonIgnore
    @OneToMany(mappedBy = "ipm_employe")
    private List<IPM_Bon> ipm_bons;

     //@JsonIgnore
    @ManyToOne(cascade = {CascadeType.ALL})
    private IPM_Service ipm_service;

     @JsonIgnore
    @OneToMany(mappedBy = "ipm_employe")
    private List<IPM_Remboursement> ipm_remboursements;

     @JsonIgnore
    @OneToMany(mappedBy = "ipm_employe")
    private List<IPM_Precompte> ipm_precompte;

     //@JsonIgnore
     @ManyToOne(cascade ={CascadeType.ALL})
    private IPM_Categorie ipm_categorie;

      @JsonIgnore
     @OneToMany(mappedBy = "ipm_employe")
     private List<IPM_Conjoint> ipm_conjoints;

     @JsonIgnore
     @OneToMany(mappedBy = "ipm_employe")
     private List<IPM_Enfant> ipm_enfants;

 }
