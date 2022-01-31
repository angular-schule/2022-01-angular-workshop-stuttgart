import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock: BookRatingService = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b,
      // rateDown(b: Book) { return b },
    };

    const storeMock = {
      getAll: () => of([])
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test
      providers: [
        // BRS ersetzen: immer wenn jemand BRS anfordert, wird stattdessen ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock },
        { provide: BookStoreService, useValue: storeMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    const service = TestBed.inject(BookRatingService); // das ist eigentlich der ratingMock!
    // service.rateUp() überwachen. Aufruf soll aber die originale Methode verwenden!
    spyOn(service, 'rateUp').and.callThrough();
    // spyOn(service, 'rateUp').and.callFake(b => b);

    const book: Book = {
      isbn: '123',
      title: '',
      description: '',
      rating: 4,
      price: 3
    };

    // Act
    component.doRateUp(book);

    // Assert
    expect(service.rateUp).toHaveBeenCalled();
    expect(service.rateUp).toHaveBeenCalledWith(book);

    // expect(service.rateUp).toHaveBeenCalledOnceWith(book);
    // expect(service.rateDown).not.toHaveBeenCalled();
  });
});
