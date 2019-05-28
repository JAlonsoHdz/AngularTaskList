import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowListComponent} from './Person/show-list/show-list.component';
import {AddComponent} from './Person/add/add.component';
import {EditComponent} from './Person/edit/edit.component';
import { ResolverService } from './Service/resolver.service';

const routes: Routes = [
  {
    path: 'list', 
    component: ShowListComponent, 
    resolve: {personList: ResolverService}
  },
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'edit/:id', component: EditComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
