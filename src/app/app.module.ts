import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BibliotequeComponent } from './biblioteque/biblioteque.component';


@NgModule({
  declarations: [
    AppComponent,
    BibliotequeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
