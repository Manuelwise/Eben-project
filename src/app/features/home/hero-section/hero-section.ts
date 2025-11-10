import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../lib/scroll-animation.directive';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
}

