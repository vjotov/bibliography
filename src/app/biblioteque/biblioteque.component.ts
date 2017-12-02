import { Component, OnInit } from '@angular/core';
import { BibItem } from '../bibitem';
import { BibitemService } from '../bibitem.service';

@Component({
  selector: 'app-biblioteque',
  templateUrl: './biblioteque.component.html',
  styleUrls: ['./biblioteque.component.css']
})
export class BibliotequeComponent implements OnInit {
  bibitems: BibItem[];
  selectedBook: BibItem;
    
  constructor(private bibitemService: BibitemService) { }

  ngOnInit() {
    this.getBibItems();
  }

  onSelect(book: BibItem): void {
    this.selectedBook = book;
  }

  getBibItems(): void {
    this.bibitemService.getBibItems()
        .subscribe(bibitems => this.bibitems = bibitems);
  }
}
