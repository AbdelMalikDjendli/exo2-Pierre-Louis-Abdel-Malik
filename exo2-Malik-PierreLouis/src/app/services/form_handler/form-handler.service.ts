import { Injectable } from '@angular/core';
import {User} from "../../interface/User";

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {

  private user: User | undefined;
  constructor() { }

  public getUser():any{
    return this.user;
  }

  public setUser(submitUser:User){
    this.user = submitUser;
  }


}
