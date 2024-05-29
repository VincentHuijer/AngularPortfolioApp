import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSomethingComponent } from './animated-something.component';

describe('AnimatedSomethingComponent', () => {
  let component: AnimatedSomethingComponent;
  let fixture: ComponentFixture<AnimatedSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSomethingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
