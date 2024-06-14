import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HtmlLogoComponent } from '../../../assets/svgIcons/html-logo/html-logo.component';

interface Skill {
  name: string;
  level: number;
  logo: string;
}

interface Skills {
  Theon: Skill[];
  Vincent: Skill[];
  Mees: Skill[];
  Ashray: Skill[];
  None: Skill[];
}

@Component({
  selector: 'app-vaardigheden-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vaardigheden-response.component.html',
  styleUrl: './vaardigheden-response.component.css'
})
export class VaardighedenResponseComponent implements OnChanges {
  logoBaseUrl = 'assets/logos/';
  @Input() personName: keyof Skills = 'None';

  skills = {
    None: [
    ],
    Theon: [
      { name: 'HTML', level: 90, logo: 'HTMLLogo.png' },
      { name: 'AdobeXd', level: 80, logo: 'AdobeXdLogo.png' },
      { name: 'JavaScript', level: 70, logo: 'JavaScriptLogo.png' },
      { name: 'Angular', level: 60, logo: 'AngularLogo.png' }
    ],
    Vincent: [
      { name: 'HTML', level: 100, logo: 'HTMLLogo.png' },
      { name: 'JavaScript', level: 85, logo: 'JavaScriptLogo.png' },
      { name: 'CSS', level: 80, logo: 'CSSLogo.png' },
      { name: 'React', level: 90, logo: 'ReactLogo.png' },
      { name: 'Vue', level: 90, logo: 'VueLogo.png' },
      { name: 'Angular', level: 60, logo: 'AngularLogo.png' },
      { name: 'Java', level: 70, logo: 'JavaLogo.png' },
      { name: 'Python', level: 55, logo: 'PythonLogo.png' }
    ],
    Mees: [
      { name: 'HTML', level: 100, logo: 'HTMLLogo.png' },
      { name: 'JavaScript', level: 85, logo: 'JavaScriptLogo.png' },
      { name: 'Vue', level: 90, logo: 'VueLogo.png' },
      { name: 'Angular', level: 60, logo: 'AngularLogo.png' },
      { name: 'Java', level: 70, logo: 'JavaLogo.png' },
      { name: 'Python', level: 55, logo: 'PythonLogo.png' }
    ],
    Ashray: [
      { name: 'HTML', level: 100, logo: 'HTMLLogo.png' },
      { name: 'JavaScript', level: 85, logo: 'JavaScriptLogo.png' },
      { name: 'Java', level: 70, logo: 'JavaLogo.png' },
      { name: 'Python', level: 55, logo: 'PythonLogo.png' }
    ]
  };
  currentSkills: Skill[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['personName']) {
      this.updateSkills();
    }
  }

  ngOnInit() {
    this.updateSkills();
  }

  updateSkills() {
    this.currentSkills = this.skills[this.personName] || [];
  }

  switchPerson(name: keyof Skills) {
    this.personName = name;
    this.updateSkills();
  }
}