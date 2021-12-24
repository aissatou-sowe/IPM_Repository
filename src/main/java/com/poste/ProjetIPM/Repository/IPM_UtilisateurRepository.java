package com.poste.ProjetIPM.Repository;

import com.poste.ProjetIPM.entities.IPM_Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPM_UtilisateurRepository extends JpaRepository<IPM_Utilisateur, Long > {

    //Utilisateur findByLogin(String login);
}
