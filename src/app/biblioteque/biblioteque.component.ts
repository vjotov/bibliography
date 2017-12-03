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

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.bibitemService.addBibItem({ name } as BibItem)
      .subscribe(bibItem => {
        this.bibitems.push(bibItem
      });
  }
}
