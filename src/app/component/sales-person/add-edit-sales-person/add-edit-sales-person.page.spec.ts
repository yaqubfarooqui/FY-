import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditSalesPersonPage } from './add-edit-sales-person.page';

describe('AddEditSalesPersonPage', () => {
  let component: AddEditSalesPersonPage;
  let fixture: ComponentFixture<AddEditSalesPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSalesPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditSalesPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
