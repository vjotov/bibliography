import { Component, OnInit } from '@angular/core';
import { BibItem } from '../bibitem';
import { BIBITEMS } from '../mock-bibitems';

@Component({
  selector: 'app-biblioteque',
  templateUrl: './biblioteque.component.html',
  styleUrls: ['./biblioteque.component.css']
})
export class BibliotequeComponent implements OnInit {
  bibitems = BIBITEMS;
  selectedBook: BibItem;
    
  constructor() { }

  ngOnInit() {
  }

  onSelect(book: BibItem): void {
    this.selectedBook = book;
  }

}
