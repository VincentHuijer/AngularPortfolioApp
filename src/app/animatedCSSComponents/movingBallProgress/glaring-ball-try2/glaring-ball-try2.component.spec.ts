import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaringBallTry2Component } from './glaring-ball-try2.component';

describe('GlaringBallTry2Component', () => {
  let component: GlaringBallTry2Component;
  let fixture: ComponentFixture<GlaringBallTry2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlaringBallTry2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlaringBallTry2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
