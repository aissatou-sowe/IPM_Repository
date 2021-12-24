package com.poste.ProjetIPM.Repository;

import com.poste.ProjetIPM.entities.IPM_Employe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPM_EmployeRepository extends JpaRepository<IPM_Employe, Long> {
    public IPM_Employe findByMatricule(String matricule);
    public  IPM_Employe findByReference(String reference);
}
