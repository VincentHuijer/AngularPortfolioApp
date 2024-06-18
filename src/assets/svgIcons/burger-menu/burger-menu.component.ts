import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [],
  template: `
    <svg width="142" height="107" viewBox="0 0 142 107" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_bd_2436_1523)">
      <rect x="25" y="5" width="92" height="57" rx="28.5" fill="white" fill-opacity="0.2"/>
      <rect x="25.5" y="5.5" width="91" height="56" rx="28" stroke="url(#paint0_linear_2436_1523)"/>
      <g filter="url(#filter1_b_2436_1523)">
      <rect x="49" y="17" width="44" height="33" rx="16.5" fill="black" fill-opacity="0.1"/>
      </g>
      <path d="M61 34L81 34" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M61 40L81 40" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M61 28L81 28" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </g>
      <defs>
      <filter id="filter0_bd_2436_1523" x="-35" y="-55" width="212" height="177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="30"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2436_1523"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="20"/>
      <feGaussianBlur stdDeviation="12.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect1_backgroundBlur_2436_1523" result="effect2_dropShadow_2436_1523"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2436_1523" result="shape"/>
      </filter>
      <filter id="filter1_b_2436_1523" x="-51" y="-83" width="244" height="233" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2436_1523"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2436_1523" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_2436_1523" x1="25" y1="5" x2="119.064" y2="55.2573" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="0.04" stop-color="white" stop-opacity="0.4"/>
      <stop offset="1" stop-color="white" stop-opacity="0.03"/>
      </linearGradient>
      </defs>
    </svg>

  `,
  styles: ``
})
export class BurgerMenuComponent {

}
