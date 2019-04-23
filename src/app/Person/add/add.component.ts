import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  fN = '';
  lN = '';

  constructor(private service: ServiceService, private router: Router ) { }

  submit() {
    console.log(this.fN);
    this.service.addPerson(this.fN, this.lN);
    this.router.navigateByUrl('/list');

  }

}
