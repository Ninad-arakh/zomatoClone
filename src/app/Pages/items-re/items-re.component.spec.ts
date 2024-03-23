import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReComponent } from './items-re.component';

describe('ItemsReComponent', () => {
  let component: ItemsReComponent;
  let fixture: ComponentFixture<ItemsReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsReComponent]
    });
    fixture = TestBed.createComponent(ItemsReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
