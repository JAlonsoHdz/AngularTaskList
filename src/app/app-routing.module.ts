import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowListComponent} from './Person/show-list/show-list.component';
import {AddComponent} from './Person/add/add.component';
import {EditComponent} from './Person/edit/edit.component';

const routes: Routes = [
  {path: 'list', component: ShowListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'edit/:id', component: EditComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
