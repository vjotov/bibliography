import { Component, OnInit, Input } from '@angular/core';
import { BibItem } from '../bibitem';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: BibItem;

  constructor() { }

  ngOnInit() {
  }

}
