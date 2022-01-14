import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctUpdateComponent } from './proudct-update.component';

describe('ProudctUpdateComponent', () => {
  let component: ProudctUpdateComponent;
  let fixture: ComponentFixture<ProudctUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
