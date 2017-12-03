import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BibliotequeComponent } from './biblioteque/biblioteque.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BibItemService } from './bibitem.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    BibliotequeComponent,
    BookDetailComponent,
    MessagesComponent
  ],
 
  providers: [ BibItemService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
