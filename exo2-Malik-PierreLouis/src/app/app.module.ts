import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FooterComponent } from './component/footer/footer.component';

import { FormulaireComponent } from './component/formulaire/formulaire.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FilmComponent } from './component/film/film.component';
import {FormsModule} from "@angular/forms";
import { GestionComponent } from './component/gestion/gestion.component';
import {FormHandlerService} from "./services/form_handler/form-handler.service";
import {UserBuilder} from "./builder/UserBuilder";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,

    FormulaireComponent,

    FilmComponent,
      GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormHandlerService, UserBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
