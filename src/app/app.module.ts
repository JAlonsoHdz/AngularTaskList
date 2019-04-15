import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { DeleteComponent } from './Person/delete/delete.component';
import { ShowListComponent } from './Person/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
