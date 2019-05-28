import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Person } from '../Model/Person';
import { Observable} from 'rxjs';
import { ServiceService } from './service.service';


@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<Person[]> {


  constructor(private _persons: ServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    return this._persons.getPersons();        
  }
}
  