import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Person } from 'src/app/Model/Person';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  persons:Person[];
  constructor(private service:ServiceService, private router:Router ) { }


  ngOnInit() {
    this.service.getPersons()
    .subscribe(data=>{
      this.persons=data;
    })
  }

  //edit(person) { 
    
   // this.router.navigate(['/edit', {id: person.id, fN: person.firstName, lN: person.lastName }]); // This is where the error might be
    
    
 // }

}
