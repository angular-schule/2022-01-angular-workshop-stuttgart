import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl2 = environment.apiUrl;
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books/search/' + term);
  }

  delete(isbn: string): Observable<unknown> {
    // return this.http.delete<string>(this.apiUrl + '/books/' + isbn);
    // return this.http.delete(this.apiUrl + '/books/' + isbn, { responseType: 'text' });
    return this.http.delete<unknown>(this.apiUrl + '/books/' + isbn);
  }
}
