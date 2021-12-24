package com.poste.ProjetIPM.services;

import com.poste.ProjetIPM.entities.IPM_Enfant;

import java.util.Collection;

public interface IPM_EnfantService {

    Collection<IPM_Enfant> getAll();

    IPM_Enfant getById(long id);

    IPM_Enfant save(IPM_Enfant ipm_enfant);

    void update (IPM_Enfant ipm_enfant);

    void  delete(long id);

}
