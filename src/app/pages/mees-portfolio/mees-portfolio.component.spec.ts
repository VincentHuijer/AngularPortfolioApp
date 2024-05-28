import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesPortfolioComponent } from './mees-portfolio.component';

describe('MeesPortfolioComponent', () => {
  let component: MeesPortfolioComponent;
  let fixture: ComponentFixture<MeesPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeesPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeesPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
