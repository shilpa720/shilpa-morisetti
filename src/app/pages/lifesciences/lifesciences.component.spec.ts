import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesciencesComponent } from './lifesciences.component';

describe('LifesciencesComponent', () => {
  let component: LifesciencesComponent;
  let fixture: ComponentFixture<LifesciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifesciencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifesciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
