import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMenuComponent } from './year-menu.component';

describe('YearMenuComponent', () => {
  let component: YearMenuComponent;
  let fixture: ComponentFixture<YearMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
