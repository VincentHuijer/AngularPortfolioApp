import { Routes } from '@angular/router';
import { AshrayPortfolioComponent } from './pages/ashray-portfolio/ashray-portfolio.component';
import { MeesPortfolioComponent } from './pages/mees-portfolio/mees-portfolio.component';
import { TheonPortfolioComponent } from './pages/theon-portfolio/theon-portfolio.component';
import { VincentPortfolioComponent } from './pages/vincent-portfolio/vincent-portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { CssAnimationsLearningPageComponent } from './pages/css-animations-learning-page/css-animations-learning-page.component';
import { GsapAnimationsLearningPageComponent } from './pages/gsap-animations-learning-page/gsap-animations-learning-page.component';
import { GsapAnimations2Component } from './pages/gsap-animations2/gsap-animations2.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { OverOnsComponent } from './pages/over-ons/over-ons.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'ashray', component: AshrayPortfolioComponent },
  { path: 'mees', component: MeesPortfolioComponent },
  { path: 'theon', component: TheonPortfolioComponent },
  { path: 'vincent', component: VincentPortfolioComponent },
  { path: 'css-animations', component: CssAnimationsLearningPageComponent },
  { path: 'gsap-animations', component: GsapAnimationsLearningPageComponent },
  { path: 'gsap-animations2', component: GsapAnimations2Component },
  { path: 'testpage', component: TestPageComponent },
  { path: 'overons', component: OverOnsComponent},
  { path: 'portfolios', component: PortfoliosComponent}
];
