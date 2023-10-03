import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import {FilmComponent} from "./component/film/film.component";
import {GestionComponent} from "./component/gestion/gestion.component";
import {FormulaireComponent} from "./component/formulaire/formulaire.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'list', component: FilmComponent},
  {path: 'gestion', component: GestionComponent},
  {path:'', redirectTo:'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
