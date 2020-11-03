import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesPersonPage } from './sales-person.page';

describe('SalesPersonPage', () => {
  let component: SalesPersonPage;
  let fixture: ComponentFixture<SalesPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
