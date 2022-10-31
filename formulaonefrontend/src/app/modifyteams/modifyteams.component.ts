import { Component, OnInit } from '@angular/core';
import {FormulaOneTeam} from "../models/formulaoneteam";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-modifyteams',
  templateUrl: './modifyteams.component.html',
  styleUrls: ['./modifyteams.component.css']
})
export class ModifyteamsComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  formulaOneTeams: FormulaOneTeam[] = [];
  chosenTeam: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getFormulaOneTeams();
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

  updateTeam(id: number) {
    this.formulaOneTeam.id = id;
    this.formulaOneTeam.name = this.teamForm.value.name!;
    this.formulaOneTeam.foundationYear = this.teamForm.value.foundationYear!;
    this.formulaOneTeam.worldChampionshipsWon = this.teamForm.value.worldChampionshipsWon!;
    this.formulaOneTeam.paidTheEntryFee = this.teamForm.value.paidTheEntryFee!;
    this.appService.updateFormulaOneTeam(this.formulaOneTeam);
    console.log(this.formulaOneTeam);
  }

  async getFormulaOneTeams() {
    this.formulaOneTeams = (await this.appService.getFormulaOneTeams())!;
    console.log(this.formulaOneTeams);
  }



}
