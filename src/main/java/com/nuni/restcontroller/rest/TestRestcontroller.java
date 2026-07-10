package com.nuni.restcontroller.rest;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class TestRestcontroller {
    @GetMapping("/number")
    public int coolemethode2(){
        return 67;
    } 
    @GetMapping("/")
    public String coolemethode(){
        return "Moin";
    }
   
} 

