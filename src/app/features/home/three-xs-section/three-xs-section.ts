import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../lib/scroll-animation.directive';

interface ThreeX {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-three-xs-section',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './three-xs-section.html',
  styleUrl: './three-xs-section.scss'
})
export class ThreeXsSectionComponent {
  threeXs: ThreeX[] = [
    {
      title: 'eXcellence',
      description: 'We are committed to achieving the\nhighest standards in all our endeavors.\nPalmX fosters a culture of excellence in\nresearch, innovation, and collaboration.',
      icon: 'lucideAward'
    },
    {
      title: 'eXchange',
      description: 'Knowledge exchange is central to our\nvision. We facilitate a dynamic\nenvironment where ideas, research, and\nresources are shared freely, creating a\ncollaborative network.',
      icon: 'lucideRefreshCw'
    },
    {
      title: 'eXploration',
      description: 'At PalmX, exploration drives our curiosity\nand discovery. We encourage pushing the\nlimits of what\'s possible, uncovering novel\nsolutions in neuroscience, robotics, and\nAI.',
      icon: 'lucideCompass'
    }
  ];
}

