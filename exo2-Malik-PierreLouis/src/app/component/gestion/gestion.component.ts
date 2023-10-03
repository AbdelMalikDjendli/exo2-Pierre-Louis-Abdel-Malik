import { Component } from '@angular/core';
import {FormHandlerService} from "../../services/form_handler/form-handler.service";
import {User} from "../../interface/User";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

    public previousFormSubmitter: User | undefined;

    constructor(private service: FormHandlerService) {
    }

    ngOnInit() {
        this.previousFormSubmitter = this.service.getUser();
    }
}
