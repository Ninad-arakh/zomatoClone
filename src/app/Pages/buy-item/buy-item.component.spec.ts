import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemComponent } from './buy-item.component';

describe('BuyItemComponent', () => {
  let component: BuyItemComponent;
  let fixture: ComponentFixture<BuyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyItemComponent]
    });
    fixture = TestBed.createComponent(BuyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
