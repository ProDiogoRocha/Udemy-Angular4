import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { MtheaderComponent } from './mtheader/mtheader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    MtheaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
