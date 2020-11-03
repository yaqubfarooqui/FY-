import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditBuyerSellerPage } from './add-edit-buyer-seller.page';

describe('AddEditBuyerSellerPage', () => {
  let component: AddEditBuyerSellerPage;
  let fixture: ComponentFixture<AddEditBuyerSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBuyerSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditBuyerSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
