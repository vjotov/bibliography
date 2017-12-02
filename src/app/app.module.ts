import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { BibliotequeComponent } from './biblioteque/biblioteque.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BibitemService } from './bibitem.service';


@NgModule({
  declarations: [
    AppComponent,
    BibliotequeComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [BibitemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
