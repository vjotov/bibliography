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
    
  constructor(private bibItemService: BibItemService) { }

  ngOnInit() {
    this.getBibItems();
  }

  getBibItems(): void {
    this.bibItemService.getBibItems()
        .subscribe(bibitems => this.bibitems = bibitems);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.bibItemService.addBibItem({ name } as BibItem)
      .subscribe(bibItem => {
        this.bibitems.push(bibItem
      });
  }

  delete(bibItem: BibItem): void {
    this.bibitems = this.bibitems.filter(b => b !== bibItem );
    this.bibItemService.delete(bibItem).subscribe();
  }
}
