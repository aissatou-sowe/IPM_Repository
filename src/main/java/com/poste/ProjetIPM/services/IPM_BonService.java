package com.poste.ProjetIPM.services;

import com.poste.ProjetIPM.entities.IPM_Bon;

import java.util.Collection;

public interface IPM_BonService {

    Collection<IPM_Bon> getAll();

    IPM_Bon getById(long id);

    void save(IPM_Bon ipm_bon);

    void update(IPM_Bon ipm_bon);

    void delete(Long id);
}
