import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, RequiredValidator, ValidatorFn, AbstractControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
  constructor( private router:Router) {
  }

  public isChecked = true;

  profilForm = new FormGroup(
    {
      nom : new FormControl('', Validators.required),
      prenom : new FormControl('', Validators.required),
      age : new FormControl(''),
      email : new FormControl('',[Validators.required, this.emailValidator()]),
      commentaire : new FormControl('',Validators.required)
    }
  )

  onChange():void{
    if(this.isChecked) {
      this.isChecked = false;
      this.profilForm.controls['email'].clearValidators();
      this.profilForm.controls['email'].updateValueAndValidity();
    }
    else{
      this.isChecked = true;
    }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl<string>): {[key: string]: any} | null => {
      const forbidden = !(control.value.indexOf('@')>-1);
      return forbidden ? {'forbiddenEmail': {value: control.value}} : null;
    };
  }

  onSubmit() {
    // TODO: Utiliser EventEmitter avec la valeur du formulaire
    //console.warn(this.profileForm.value);
    //console.log('Le formulaire est valide');
    this.router.navigate(['homepage'])
  }

}
