import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAnimationsLearningPageComponent } from './css-animations-learning-page.component';

describe('CssAnimationsLearningPageComponent', () => {
  let component: CssAnimationsLearningPageComponent;
  let fixture: ComponentFixture<CssAnimationsLearningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssAnimationsLearningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssAnimationsLearningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
