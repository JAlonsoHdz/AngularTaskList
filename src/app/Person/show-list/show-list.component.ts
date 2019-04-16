import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
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

}
