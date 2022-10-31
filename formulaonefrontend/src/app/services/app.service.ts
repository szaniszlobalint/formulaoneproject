import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormulaOneTeam} from "../models/formulaoneteam";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  async getFormulaOneTeams() {
    return this.http.get<FormulaOneTeam[]>('http://localhost:8080/rest/getformulaoneteams').toPromise();
  }

  async createFormulaOneTeam(formulaOneTeam: FormulaOneTeam) {
    return this.http.post<FormulaOneTeam>('http://localhost:8080/rest/createformulaoneteam', formulaOneTeam).toPromise();
  }

  loginUser(user: User) {
    return this.http.post<User>('http://localhost:8080/rest/loginuser', user);
  }

  updateFormulaOneTeam(formulaOneTeam: FormulaOneTeam) {
    return this.http.post<FormulaOneTeam>('http://localhost:8080/rest/updateformulaoneteam', formulaOneTeam).toPromise();
  }

  deleteFormulaOneTeam(id: number) {
    return this.http.post<number>('http://localhost:8080/rest/deleteformulaoneteam', id).toPromise();
  }


}
