import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Observable, switchMap, tap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');
  books$: Observable<Book[]>;
  loading = false;

  constructor(private bs: BookStoreService) {
    const term$: Observable<string> = this.searchControl.valueChanges;

    this.books$ = term$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      tap(() => this.loading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.loading = false),
    );

    /*
    - Suchbegriff mindestens 3 Zeichen lang
    - nicht zu viele Begriffe nacheinander an den Server schicken
    - Begriff zum Server schicken
    - Ergebnisse anzeigen
    - AsyncPipe
    */
  }

  ngOnInit(): void {
  }

}
