package com.formulaone.demo.repositories;

import com.formulaone.demo.entities.FormulaOneTeam;
import org.springframework.data.repository.CrudRepository;

public interface FormulaOneTeamRepository extends CrudRepository<FormulaOneTeam, Integer> {
}
