package com.nuni.restcontroller.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin 
public class NeueListe {
 List<String> ziegenliste = new ArrayList<>();
    public NeueListe(){
        ziegenliste.add("Ziegenohrenknochenrasierschaumfleisch");
        ziegenliste.add("Ziegenkäsereibe");
    } 
    @GetMapping("/Liste")
    public List<String> coolemethode67(){
        //System.out.println(fruits.get(0)); // Gibt "Apfel" aus
        System.out.println(ziegenliste.size());  // Gibt 2 aus
        return ziegenliste;
 }
     @PostMapping("/Liste/add")
    public void coolemethode68(@RequestBody String blabla){
        ziegenliste.add(blabla);
} 

    @DeleteMapping("/Liste/deleate")
    public ResponseEntity coolemethode69(@RequestParam int servuus) { 
        if (servuus>=ziegenliste.size()||servuus<0) {
            return ResponseEntity.badRequest().build();
         
        }
        ziegenliste.remove(servuus);
        return ResponseEntity.ok().build();
    } 
}

