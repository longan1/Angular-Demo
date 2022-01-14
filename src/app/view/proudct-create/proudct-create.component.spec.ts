import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctCreateComponent } from './proudct-create.component';

describe('ProudctCreateComponent', () => {
  let component: ProudctCreateComponent;
  let fixture: ComponentFixture<ProudctCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
