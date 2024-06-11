import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asterik',
  standalone: true,
  imports: [],
  template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1096 0.214478V37.7467" [attr.stroke]="color" stroke-width="3" stroke-miterlimit="10"/>
      <path d="M34 18.8595H0" [attr.stroke]="color" stroke-width="3" stroke-miterlimit="10"/>
      <path d="M28.9548 32.1774L5.04514 5.78378" [attr.stroke]="color" stroke-width="3" stroke-miterlimit="10"/>
      <path d="M28.9548 5.78378L5.04514 32.1774" [attr.stroke]="color" stroke-width="3" stroke-miterlimit="10"/>
    </svg>
  `,
  styles: ``
})
export class AsterikComponent {
  @Input() width: string = "34";
  @Input() height: string = "38";
  @Input() color: string = "#C6E643"; //hhs groen
}
