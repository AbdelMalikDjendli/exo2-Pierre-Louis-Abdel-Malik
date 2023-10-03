import {User} from "../interface/User";

export class UserBuilder {
  public CreateUser(data:any):User{
    return {
      firstName: data["nom"],
      lastName: data["prenom"],
      age: parseInt(data["age"]),
      email: data["email"] ?? null,
      commentary: data["commentaire"]
    };
  }
}
