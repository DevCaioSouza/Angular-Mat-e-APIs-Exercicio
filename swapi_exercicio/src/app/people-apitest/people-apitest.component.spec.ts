import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAPItestComponent } from './people-apitest.component';

describe('PeopleAPItestComponent', () => {
  let component: PeopleAPItestComponent;
  let fixture: ComponentFixture<PeopleAPItestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleAPItestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAPItestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
