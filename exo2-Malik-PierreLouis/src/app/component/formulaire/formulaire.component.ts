import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators, RequiredValidator, ValidatorFn, AbstractControl} from '@angular/forms';
import {Router} from "@angular/router";
import {FormHandlerService} from "../../services/form_handler/form-handler.service";
import {UserBuilder} from "../../builder/UserBuilder";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
  constructor( private router:Router,
               private service:FormHandlerService,
               private builder:UserBuilder)
  {
  }

  public isChecked = false;


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
      this.profilForm.controls['email'].setValidators([Validators.required,this.emailValidator()]);
    }
    else{
      this.isChecked = true;
      this.profilForm.controls['email'].clearValidators();
    }
    this.profilForm.controls['email'].updateValueAndValidity();
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl<string>): {[key: string]: any} | null => {
      const forbidden = !(control.value.indexOf('@')>-1);
      return forbidden ? {'forbiddenEmail': {value: control.value}} : null;
    };
  }

  onSubmit() {

    console.log(this.profilForm.value);
    this.service.setUser(this.builder.CreateUser(this.profilForm.value));
    //console.warn(this.profileForm.value);
    //console.log('Le formulaire est valide');
    window.alert("Le formulaire est valide");
    this.router.navigate(['homepage'])

  }

}
