import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaringBallComponent } from './glaring-ball.component';

describe('GlaringBallComponent', () => {
  let component: GlaringBallComponent;
  let fixture: ComponentFixture<GlaringBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlaringBallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlaringBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
