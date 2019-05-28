import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Person } from 'src/app/Model/Person';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  persons:Person[];
  constructor(private service:ServiceService, private aRoute: ActivatedRoute ) { 
           
  }

  ngOnInit() {
    // Invoking resolver service
    this.persons = this.aRoute.snapshot.data['personList'];
  }

  delete(person: Person) { 
    this.service.deletePerson(person);  
    alert("User removed");
    
  }
}
