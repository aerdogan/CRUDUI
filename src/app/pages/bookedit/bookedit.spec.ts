import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookedit } from './bookedit';

describe('Bookedit', () => {
  let component: Bookedit;
  let fixture: ComponentFixture<Bookedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookedit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
