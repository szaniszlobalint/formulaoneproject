import { Component, OnInit } from '@angular/core';
import {FormulaOneTeam} from "../models/formulaoneteam";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formulaOneTeams: FormulaOneTeam[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getFormulaOneTeams();
  }

  async getFormulaOneTeams() {
    this.formulaOneTeams = (await this.appService.getFormulaOneTeams())!;
    console.log(this.formulaOneTeams);
  }

  displayedColumns: string[] = ['name', 'foundationYear', 'worldChampionshipsWon', 'paidTheEntryFee'];

}
