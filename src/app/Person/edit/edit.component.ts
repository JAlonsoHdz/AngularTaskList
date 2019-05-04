import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../Service/service.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  fN = "";
  lN = "";
  
  
  constructor(private service: ServiceService, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit() {

    this.aRoute.paramMap
    .subscribe(params => {
      params.get('id');

    });
   
   this.aRoute.queryParamMap
   .subscribe(params => {
     let id = +params.get('id');
     let fN = params.get('fN');
     let lN = params.get('lN');

     this.id = id;
     this.fN = fN;
     this.lN = lN;
     
   })
    
  }

  edit() {
    
      this.service.editPerson(this.id, this.fN, this.lN);
      this.router.navigateByUrl('/list');

    
  }

}
