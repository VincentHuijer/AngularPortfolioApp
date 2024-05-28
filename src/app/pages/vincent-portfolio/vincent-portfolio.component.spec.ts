import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincentPortfolioComponent } from './vincent-portfolio.component';

describe('VincentPortfolioComponent', () => {
  let component: VincentPortfolioComponent;
  let fixture: ComponentFixture<VincentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VincentPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VincentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
