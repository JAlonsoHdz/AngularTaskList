import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../Model/Person';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  persons: Person[];
  constructor(private http: HttpClient) { }


  List = 'http://localhost:8080/todoangular/persons';
  Add = 'http://localhost:8080/todoangular/add';
  Edit = 'http://localhost:8080/todoangular/edit';
  Delete = 'http://localhost:8080/todoangular/delete';

  getPersons() {
    return this.http.get<Person[]>(this.List);
  } 


  addPerson(fN: string, lN: string) {
    const post = { id: identifierModuleUrl, firstName: fN, lastName: lN };

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

  deletePerson(person: Person) {
    return this.http.delete(this.Delete + '/' + person.id)
    .subscribe(data => {
        console.log('DELETE Request is succesful', data);  
      
    });
  }

  editPerson(id: number ,fN: string, lN: string) {
    const post = {firstName: fN, lastName: lN };


    console.log(post);
    console.log(this.Edit + '/' + id);

    return this.http.put(this.Edit + '/' + id, post
      ).subscribe(    
      data  => {
          console.log('PUT Request is successful ', data);
        },
        error  => {
          console.log('Error', error);
        }
    );
  }
}
