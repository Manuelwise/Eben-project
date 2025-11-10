import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../lib/scroll-animation.directive';

interface Domain {
  title: string;
  description: string;
}

@Component({
  selector: 'app-core-domains-section',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './core-domains-section.html',
  styleUrl: './core-domains-section.scss'
})
export class CoreDomainsSectionComponent {
  domains: Domain[] = [
    {
      title: 'Neuroscience.',
      description: 'Understanding the brain to inspire new knowledge, therapies, and technologies that advance human wellbeing.'
    },
    {
      title: 'Neurotechnology.',
      description: 'Designing tools that interface with the nervous system to restore, enhance, or decode brain function.'
    },
    {
      title: 'Robotics.',
      description: 'Building intelligent, embodied systems that sense, move, and interact with the world in human-centred ways.'
    },
    {
      title: 'Artificial Intelligence.',
      description: 'Applying machine learning and cognitive models to develop systems that learn, adapt, and support human capabilities.'
    }
  ];
}

