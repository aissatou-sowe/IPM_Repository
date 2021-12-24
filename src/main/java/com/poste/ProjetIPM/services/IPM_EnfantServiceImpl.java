package com.poste.ProjetIPM.services;

import com.poste.ProjetIPM.Repository.IPM_EnfantRepository;
import com.poste.ProjetIPM.entities.IPM_Enfant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class IPM_EnfantServiceImpl implements IPM_EnfantService{
    @Autowired
    IPM_EnfantRepository ipm_enfantRepository;

    @Override
    public Collection<IPM_Enfant> getAll() {
        return ipm_enfantRepository.findAll();
    }

    @Override
    public IPM_Enfant getById(long id) {
        return ipm_enfantRepository.findById(id).get();
    }

    @Override
    public IPM_Enfant save(IPM_Enfant ipm_enfant) {
        return ipm_enfantRepository.save(ipm_enfant);
    }

    @Override
    public void update(IPM_Enfant ipm_enfant) {
        ipm_enfantRepository.save(ipm_enfant);
    }

    @Override
    public void delete(long id) {
        ipm_enfantRepository.deleteById(id);
    }
}
