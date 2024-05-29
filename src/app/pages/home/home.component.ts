import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedSomethingComponent } from '../../animatedCSSComponents/animated-something/animated-something.component';
import { BouncingBallComponent } from '../../animatedCSSComponents/movingBallProgress/bouncing-ball/bouncing-ball.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AnimatedSomethingComponent, BouncingBallComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


// @@NgModule({
//   declarations: [HeaderComponent],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [HeaderComponent]
  
// })

export class HomeComponent {}
