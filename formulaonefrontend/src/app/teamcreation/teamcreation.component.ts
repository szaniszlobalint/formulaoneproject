import { Component, OnInit } from '@angular/core';
import {FormulaOneTeam} from "../models/formulaoneteam";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-teamcreation',
  templateUrl: './teamcreation.component.html',
  styleUrls: ['./teamcreation.component.css']
})
export class TeamcreationComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");
    this.isUserLoggedIn = storeData != null && storeData == "true";
  }

  formulaOneTeam: FormulaOneTeam = {
    id: 0,
    name: '',
    foundationYear: 0,
    worldChampionshipsWon: 0,
    paidTheEntryFee: 0
  };

  teamForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    foundationYear: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1800), Validators.max(2022)]),
    worldChampionshipsWon: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(100)]),
    paidTheEntryFee: new FormControl(null, [Validators.required, Validators.pattern('[0-1]*'), Validators.min(0), Validators.max(1)]),
  });

  createTeam() {
    this.formulaOneTeam.name = this.teamForm.value.name!;
    this.formulaOneTeam.foundationYear = this.teamForm.value.foundationYear!;
    this.formulaOneTeam.worldChampionshipsWon = this.teamForm.value.worldChampionshipsWon!;
    this.formulaOneTeam.paidTheEntryFee = this.teamForm.value.paidTheEntryFee!;
    this.appService.createFormulaOneTeam(this.formulaOneTeam);
  }

}
