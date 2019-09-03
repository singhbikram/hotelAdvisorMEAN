import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{

  constructor(private http: HttpClient){}
    getUsers = () => {
      //http://localhost:3000/api/getUsers
    }

    createUser = () =>{
      //http://localhost:3000/api/createUser
    }

    verifyUser = () =>{
      //http://localhost:3000/api/verifyUser
    }
}

