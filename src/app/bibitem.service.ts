import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { BibItem } from './bibitem';
import { BIBITEMS } from './mock-bibitems';

@Injectable()
export class BibitemService {

  constructor(private messageService: MessageService) { }

  getBibItems(): Observable<BibItem[]> {
    this.messageService.add("Bibliography Items are retrived");
    return of (BIBITEMS);
  }
}
