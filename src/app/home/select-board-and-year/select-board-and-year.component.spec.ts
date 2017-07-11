import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoardAndYearComponent } from './select-board-and-year.component';

describe('SelectBoardAndYearComponent', () => {
  let component: SelectBoardAndYearComponent;
  let fixture: ComponentFixture<SelectBoardAndYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoardAndYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoardAndYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
