import { Year } from '../../interfaces/year.interface';
import { YearService } from '../../services/year.service';

import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-year-menu',
  templateUrl: './year-menu.component.html',
  styleUrls: ['./year-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YearMenuComponent implements OnInit {

  @Output() sendYear = new EventEmitter<Year>();

  currentYear: Year;
  year_id: number;

  years: Year[];

  constructor(
    private yearService: YearService
  ) { }

  ngOnInit() {

    this.getYears();


  }

  getYears(){

    this.yearService.getYears()
      .subscribe(
        (years: Year[]) => {
          this.years = years;

          this.defaultYear(years[0]);


        },
        (error: Response) => console.log('error')
      );

  }

  defaultYear(year: Year){
    this.currentYear = year;
    this.year_id = year.id;

    // Send to output
    this.send();
  }

  // Send Year Object to the Ouput of the component
  send(){

    let years = this.years
      .filter((year: Year) => year.id === +this.year_id);

    this.currentYear = years[0];
    this.sendYear.emit(this.currentYear);

  }

}
