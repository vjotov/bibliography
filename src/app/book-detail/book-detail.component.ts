import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BibItem } from '../bibitem';
import { BibItemService } from '../bibitem.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() bibItem: BibItem;

  constructor(
    private route: ActivatedRoute,
    private bibItemService: BibItemService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBibItem();
  }

  getBibItem(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bibItemService.getBibItem(id)
      .subscribe(bibItem => this.bibItem = bibItem);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
      this.bibItemService.updateBibItem(this.bibItem)
        .subscribe(() => this.goBack());
  }
}
