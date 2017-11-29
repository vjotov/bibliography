import { Component, OnInit } from '@angular/core';
import { BibItem } from '../bibitem';

@Component({
  selector: 'app-biblioteque',
  templateUrl: './biblioteque.component.html',
  styleUrls: ['./biblioteque.component.css']
})
export class BibliotequeComponent implements OnInit {
  book:BibItem = {
    id: 0,
    name: "The book"
  }

  constructor() { }

  ngOnInit() {
  }

}
