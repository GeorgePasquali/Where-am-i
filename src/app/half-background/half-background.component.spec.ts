import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfBackgroundComponent } from './half-background.component';

describe('HalfBackgroundComponent', () => {
  let component: HalfBackgroundComponent;
  let fixture: ComponentFixture<HalfBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
