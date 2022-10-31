package com.formulaone.demo.controllers;


import com.formulaone.demo.entities.FormulaOneTeam;
import com.formulaone.demo.repositories.FormulaOneTeamRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class FormulaOneTeamController {

    private final FormulaOneTeamRepository formulaOneTeamRepository;

    public FormulaOneTeamController(FormulaOneTeamRepository formulaOneTeamRepository) {
        this.formulaOneTeamRepository = formulaOneTeamRepository;
    }

    @GetMapping("rest/getformulaoneteams")
    public List<FormulaOneTeam> getAllFormulaOneTeams() {
        return (List<FormulaOneTeam>) formulaOneTeamRepository.findAll();
    }

    @PostMapping("rest/createformulaoneteam")
    public void createFormulaOneteam(@RequestBody FormulaOneTeam formulaOneTeam) {
        formulaOneTeamRepository.save(formulaOneTeam);
    }

    @PostMapping("rest/updateformulaoneteam")
    public void updateFormulaOneTeam(@RequestBody FormulaOneTeam formulaOneTeam) {
        formulaOneTeamRepository.save(formulaOneTeam);
    }

    @PostMapping("rest/deleteformulaoneteam")
    public void deleteFormulaOneTeam(@RequestBody int id) {
        formulaOneTeamRepository.deleteById(id);
    }
}
