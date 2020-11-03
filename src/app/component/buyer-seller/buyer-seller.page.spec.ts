import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyerSellerPage } from './buyer-seller.page';

describe('BuyerSellerPage', () => {
  let component: BuyerSellerPage;
  let fixture: ComponentFixture<BuyerSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
