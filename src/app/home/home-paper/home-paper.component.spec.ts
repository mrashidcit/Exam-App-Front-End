import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaperComponent } from './home-paper.component';

describe('HomePaperComponent', () => {
  let component: HomePaperComponent;
  let fixture: ComponentFixture<HomePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
