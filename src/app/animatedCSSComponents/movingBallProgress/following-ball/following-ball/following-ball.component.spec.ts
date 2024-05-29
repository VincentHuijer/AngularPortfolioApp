import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingBallComponent } from './following-ball.component';

describe('FollowingBallComponent', () => {
  let component: FollowingBallComponent;
  let fixture: ComponentFixture<FollowingBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingBallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowingBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
