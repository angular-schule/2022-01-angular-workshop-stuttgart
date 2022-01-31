import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // PULL / Synchroner Weg
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // /books/:isbn
    // console.log(isbn);

    // PUSH / Asynchroner Weg
      this.route.paramMap.subscribe(params => {
        const isbn = params.get('isbn');
        console.log(isbn);
      });
  }

  ngOnInit(): void {
  }

}
