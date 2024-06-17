import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css'
})
export class SkillBarComponent implements OnInit {
  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() percentage: number = 0;

  logoPath: string = '';

  ngOnInit() {
    this.logoPath = `assets/logos/${this.logo}`;
  }
}