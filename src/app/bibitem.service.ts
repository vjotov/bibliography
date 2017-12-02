import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BibItem } from './bibitem';
import { BIBITEMS } from './mock-bibitems';

@Injectable()
export class BibitemService {

  constructor() { }

  getBibItems(): Observable<BibItem[]> {
    return of (BIBITEMS);
  }
}
