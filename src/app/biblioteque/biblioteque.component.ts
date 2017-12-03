import { Component, OnInit } from '@angular/core';
import { BibItem } from '../bibitem';
import { BibItemService } from '../bibitem.service';

@Component({
  selector: 'app-biblioteque',
  templateUrl: './biblioteque.component.html',
  styleUrls: ['./biblioteque.component.css']
})
export class BibliotequeComponent implements OnInit {
  bibitems: BibItem[] = [];
    
  constructor(private bibitemService: BibItemService) { }

  ngOnInit() {
    this.getBibItems();
  }

  getBibItems(): void {
    this.bibitemService.getBibItems()
        .subscribe(bibitems => this.bibitems = bibitems);
  }
}
