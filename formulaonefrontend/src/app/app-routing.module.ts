import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {TeamcreationComponent} from "./teamcreation/teamcreation.component";
import {DeleteteamsComponent} from "./deleteteams/deleteteams.component";
import {ModifyteamsComponent} from "./modifyteams/modifyteams.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teamcreation', component: TeamcreationComponent},
  {path: 'deleteteams', component: DeleteteamsComponent},
  {path: 'modifyteams', component: ModifyteamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
