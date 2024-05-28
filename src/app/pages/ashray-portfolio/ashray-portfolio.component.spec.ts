import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshrayPortfolioComponent } from './ashray-portfolio.component';

describe('AshrayPortfolioComponent', () => {
  let component: AshrayPortfolioComponent;
  let fixture: ComponentFixture<AshrayPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AshrayPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AshrayPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
