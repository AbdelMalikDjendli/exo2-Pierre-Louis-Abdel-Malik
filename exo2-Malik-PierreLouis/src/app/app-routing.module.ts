import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {FilmComponent} from "./film/film.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'list', component: FilmComponent},
  {path:'', redirectTo:'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
