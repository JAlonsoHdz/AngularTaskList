import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../Model/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http: HttpClient) { }

  List = 'http://localhost:8080/todoangular/persons';
  Add = 'http://localhost:8080/todoangular/add';

  getPersons() {
    return this.http.get<Person[]>(this.List);
  }

  addPerson(fN: string, lN: string) {
    const post = { firstName: fN, lastName: lN };

    console.log(post);

    return this.http.post(this.Add, post
      ).subscribe(
      data  => {
        console.log('POST Request is successful ', data);
        },
        error  => {

        console.log('Error', error);

        }
    );
  }
}
