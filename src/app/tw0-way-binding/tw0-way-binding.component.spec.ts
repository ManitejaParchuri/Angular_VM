import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tw0WayBindingComponent } from './tw0-way-binding.component';

describe('Tw0WayBindingComponent', () => {
  let component: Tw0WayBindingComponent;
  let fixture: ComponentFixture<Tw0WayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tw0WayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tw0WayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
