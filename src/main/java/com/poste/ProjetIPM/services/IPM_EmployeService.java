package com.poste.ProjetIPM.services;

import com.poste.ProjetIPM.entities.IPM_Employe;

import java.util.Collection;

public interface IPM_EmployeService {

    Collection<IPM_Employe> getAll();

    IPM_Employe getById(long id);

    IPM_Employe save(IPM_Employe ipm_employe);

    void update(IPM_Employe ipm_employe);

    IPM_Employe getByMatricule(String matricule);
    IPM_Employe getByReference(String reference);

    void delete(Long id);
}
