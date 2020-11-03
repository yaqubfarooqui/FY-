import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditTransactionPage } from './add-edit-transaction.page';

describe('AddEditTransactionPage', () => {
  let component: AddEditTransactionPage;
  let fixture: ComponentFixture<AddEditTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
