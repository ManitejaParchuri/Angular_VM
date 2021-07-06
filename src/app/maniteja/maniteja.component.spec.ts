import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManitejaComponent } from './maniteja.component';

describe('ManitejaComponent', () => {
  let component: ManitejaComponent;
  let fixture: ComponentFixture<ManitejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManitejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManitejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
