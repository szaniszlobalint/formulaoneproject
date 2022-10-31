import { Component, OnInit } from '@angular/core';
import {FormulaOneTeam} from "../models/formulaoneteam";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-deleteteams',
  templateUrl: './deleteteams.component.html',
  styleUrls: ['./deleteteams.component.css']
})
export class DeleteteamsComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  formulaOneTeams: FormulaOneTeam[] = [];
  chosenTeam: number = 0;

  constructor(private appService: AppService) { }

  deleteTeam(id: number) {
    this.appService.deleteFormulaOneTeam(id);
  }

  ngOnInit(): void {
    this.getFormulaOneTeams();
    let storeData = localStorage.getItem("isUserLoggedIn");
    this.isUserLoggedIn = storeData != null && storeData == "true";
  }

  async getFormulaOneTeams() {
    this.formulaOneTeams = (await this.appService.getFormulaOneTeams())!;
    console.log(this.formulaOneTeams);
  }
}
