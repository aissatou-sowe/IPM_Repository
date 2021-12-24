package com.poste.ProjetIPM.controllers;

import com.poste.ProjetIPM.entities.IPM_Employe;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import com.poste.ProjetIPM.services.IPM_EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
//@RequestMapping("/api")
public class IPM_EmployeController {
    public static String uploadDiretory = System.getProperty("user.dir") + "/src/main/webapp/imagedata";
    @Autowired
    IPM_EmployeService ipm_employeService;

    @GetMapping("/employe")
    public Collection<IPM_Employe> getAll() {
        return ipm_employeService.getAll();
    }


    //@RequestMapping("employe")
   // @ResponseBody
    //public String saveEmploye(IPM_Employe employe, @RequestParam("img") MultipartFile file) {
     //   StringBuilder fileNames = new StringBuilder();
     //   String filename = employe.getSid() + file.getOriginalFilename().substring(file.getOriginalFilename().length() - 4);
      //  Path fileNameAndPath= Paths.get(uploadDiretory,filename);
       // try {
        //    Files.write(fileNameAndPath, file.getBytes());
     //   } catch (IOException e) {
         //   e.printStackTrace();
           // employe.setSphoto(filename);
            //repo.save(employe);
           // return "Save Data successfully!!";
      //  }

//    @GetMapping("/employe/{id}")
//    public ResponseEntity<IPM_Employe> getById(@PathVariable Long id) throws ResourceNotFoundException {
//        IPM_Employe employe = ipm_employeService.getById(id).orElseThrow(
//                () -> new ResourceNotFoundException("Employe not found for this id")
//        );
//        return ResponseEntity.ok().body(employe);
//    }

    @GetMapping("/employe/{id}")
    public IPM_Employe getById(@PathVariable Long id)
    {
        return ipm_employeService.getById(id);
    }

    @PostMapping("/employe")
    public String save(@RequestBody IPM_Employe ipm_employe){
        ipm_employeService.save(ipm_employe);
        return  "Slt " + ipm_employe.getNom() +"enregistrement reussi avec success";


    }

    @PutMapping("/employe")
    public void update(@RequestBody IPM_Employe ipm_employe){
        ipm_employeService.update(ipm_employe);
    }

    @DeleteMapping("/employe/{id}")
    public  void delete(@PathVariable Long id){
        ipm_employeService.delete(id);
    }

    @GetMapping("/rechercheM/{matricule}")
    public IPM_Employe recherche_matricule(@PathVariable String matricule)
    {
        return ipm_employeService.getByMatricule(matricule);
    }

    @GetMapping("/rechercheR/{reference}")
    public IPM_Employe recherche_reference(@PathVariable String reference)
    {
        return ipm_employeService.getByReference(reference);
    }
}
