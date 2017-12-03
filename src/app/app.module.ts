import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { BibliotequeComponent } from './biblioteque/biblioteque.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { BibitemService } from './bibitem.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    BibliotequeComponent,
    BookDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [BibitemService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
