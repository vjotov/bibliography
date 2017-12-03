import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { BibItem } from './bibitem';
import { BIBITEMS } from './mock-bibitems';

@Injectable()
export class BibItemService {

  constructor(private messageService: MessageService) { }

  getBibItems(): Observable<BibItem[]> {
    this.messageService.add("Bibliography Items are retrived");
    return of (BIBITEMS);
  }

  getBibItem(id: number): Observable<BibItem> {
    this.messageService.add(`BibitemService: fetch bibItem id=${id}`);
    return of(BIBITEMS.find(bibItem => bibItem.id === id));
  }
}
