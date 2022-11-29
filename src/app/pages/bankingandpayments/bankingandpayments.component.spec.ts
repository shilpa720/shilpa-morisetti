import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingandpaymentsComponent } from './bankingandpayments.component';

describe('BankingandpaymentsComponent', () => {
  let component: BankingandpaymentsComponent;
  let fixture: ComponentFixture<BankingandpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingandpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingandpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
