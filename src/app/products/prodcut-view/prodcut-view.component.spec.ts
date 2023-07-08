import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutViewComponent } from './prodcut-view.component';

describe('ProdcutViewComponent', () => {
  let component: ProdcutViewComponent;
  let fixture: ComponentFixture<ProdcutViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdcutViewComponent]
    });
    fixture = TestBed.createComponent(ProdcutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
