import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BibliotequeComponent } from './biblioteque/biblioteque.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/biblioteque', pathMatch: 'full' },
  { path: 'biblioteque', component: BibliotequeComponent},
  { path: 'bibitem/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
