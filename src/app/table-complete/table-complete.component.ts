import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {StatLine} from './../stats';
import {Country} from './../country';
import {CountryService} from './../country.service';
import {NgbdSortableHeader, SortEvent} from './../sortable.directive';


@Component(
    {selector: 'ngbd-table-complete', styleUrls:['./table-complete.component.scss'], templateUrl: './table-complete.component.html', providers: [CountryService, DecimalPipe]})
export class NgbdTableComplete {
  countries$: Observable<StatLine[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}