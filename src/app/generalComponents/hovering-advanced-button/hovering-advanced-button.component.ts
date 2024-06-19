import { AfterViewInit, Component, ElementRef, Input, input } from '@angular/core';
import { AngleBracketsComponent } from '../../../assets/svgIcons/angle-brackets/angle-brackets.component';

@Component({
  selector: 'app-hovering-advanced-button',
  standalone: true,
  imports: [AngleBracketsComponent],
  templateUrl: './hovering-advanced-button.component.html',
  styleUrl: './hovering-advanced-button.component.css'
})
export class hoveringAdvancedButton implements AfterViewInit {
  @Input() width: string = '250px';
  @Input() height: string = '80px';
  @Input() text: string = 'Click Me';
  @Input() defaultColor: string = '#436EFC';
  @Input() hoverColor: string = '#2616E7';
  @Input() borderRadius: string = '12';
  @Input() fontSize: Number = 20;
  @Input() title: string = 'title';
  @Input() svg: any = "angleBracketsComponent";

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const button = this.el.nativeElement.querySelector('button');

    gsap.set(button, {
      width: this.width,
      height: this.height,
      backgroundColor: this.defaultColor,
      borderRadius: this.borderRadius,
      fontSize: Number(this.fontSize)
    });

    button.addEventListener('mouseenter', () => {
      gsap.to(button, { backgroundColor: this.hoverColor, duration: 0.3 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { backgroundColor: this.defaultColor, duration: 0.3 });
    });
  }
}