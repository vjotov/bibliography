import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { BibItem } from './bibitem';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BibItemService {
  private bibItemsUrl = 'api/bibItems';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBibItems(): Observable<BibItem[]> {
    return this.http.get<BibItem[]>(this.bibItemsUrl).pipe(
      tap(bibItems => this.log('fetched bibItems')),
      catchError(this.handleError('getBibItems', []))
    )

  }

  getBibItem(id: number): Observable<BibItem> {
    const url = `${this.bibItemsUrl}/${id}`;
    return this.http.get<BibItem>(url).pipe(
      tap(_ => this.log(`fetch bibItem id=${id}`)),
      catchError(this.handleError<BibItem>(`getBibItem id=${id}`))
    );
  }

  updateBibItem(bibItem: BibItem) Observable<any>{
    return this.http.put(this.bibItemsUrl, bibitem, httpOptions).pipe(
      tap(_ => this.log(`update bibItem id=${bibItem.id}`)),
      catchError(this.handleError<any>("Update BibItem"))
    );
  }

  addBibItem(bibItem: BibItem) Observable<BibItem>{
    return this.http.push(this.bibItemsUrl, bibItem, httpOptions).pipe(
      tap((bibItem: bibItem) => this.log("added bibItem with id=${bibItem.id}")),
      catchError(this.handleError<BibItem>("addBibItem"))
    );
  }

  deleteBibItem(bibItem: BibItem | number) Observable<BibItem>{
    const id = typeof bibItem === 'number' ? bibItem : bibItem.id;
    const url = `${this.bibItemsUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe (
      tap(_ => this.log(`deleted bibItem id=${id}`)),
      catchError(this.handleError<BibItem>("deleteBibItem"))
    );
  }

  searchBibItem(term: string) Observable<BibItem>{
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<BibItem[]>(`api/bibItems/?name=${term}`).pipe(
      tap(_, => this.log(`found bibItem matching "${term}"`)),
      catchError(this.handleError<BibItem[]>("searchBibItem",[]))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BibItemService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
