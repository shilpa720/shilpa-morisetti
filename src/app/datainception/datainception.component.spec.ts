import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainceptionComponent } from './datainception.component';

describe('DatainceptionComponent', () => {
  let component: DatainceptionComponent;
  let fixture: ComponentFixture<DatainceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatainceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatainceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
