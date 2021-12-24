package com.poste.ProjetIPM.controllers;

import com.poste.ProjetIPM.entities.IPM_Enfant;
import com.poste.ProjetIPM.services.IPM_EnfantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
//@RequestMapping("/api")
public class IPM_EnfantController {
    @Autowired
    IPM_EnfantService ipm_enfantService;

    @GetMapping("/enfant")
    public Collection<IPM_Enfant> getAll()
    {
        return ipm_enfantService.getAll();
    }

    @GetMapping("/enfant/{id}")
    public IPM_Enfant getById(@PathVariable Long id)
    {
        return ipm_enfantService.getById(id);
    }

    @PostMapping("/enfant")
    public String save(@RequestBody IPM_Enfant ipm_enfant)
    {
        ipm_enfantService.save(ipm_enfant);
        return "Slt " + ipm_enfant.getNom_enfant() +"enregistrement reussi avec success";
    }

    @PutMapping("/enfant")
    public void  update(@RequestBody IPM_Enfant ipm_enfant)
    {
        ipm_enfantService.update(ipm_enfant);
    }

    @DeleteMapping("/enfant/{id}")
    public void delete(@PathVariable Long id)
    {
        ipm_enfantService.delete(id);
    }
}
