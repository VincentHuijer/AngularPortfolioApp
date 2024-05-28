import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheonPortfolioComponent } from './theon-portfolio.component';

describe('TheonPortfolioComponent', () => {
  let component: TheonPortfolioComponent;
  let fixture: ComponentFixture<TheonPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheonPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheonPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
