import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() {}

  rateUp(book: Book): Book {
    if (book.rating < 5) {
      return {
        ...book,
        rating: book.rating + 1
      }
    } else {
      return book;
    }
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      // rating: Math.max(book.rating - 1, 1)
      rating: book.rating > 1 ? book.rating - 1 : 1
    }
  }
}


