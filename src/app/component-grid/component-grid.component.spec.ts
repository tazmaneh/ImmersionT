import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGridComponent } from './component-grid.component';

describe('ComponentGridComponent', () => {
  let component: ComponentGridComponent;
  let fixture: ComponentFixture<ComponentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
