import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../lib/scroll-animation.directive';

interface PresentationSegment {
  duration: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-presentations-section',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './presentations-section.html',
  styleUrl: './presentations-section.scss'
})
export class PresentationsSectionComponent {
  segments: PresentationSegment[] = [
    {
      duration: '5 minutes',
      title: 'Introduction',
      description: 'Brief introduction of the speaker and the topic. Set the context and outline the flow of the session.'
    },
    {
      duration: '35 minutes',
      title: 'Presentation',
      description: 'The speaker delivers their full presentation without interruptions. This allows for a smooth, uninterrupted explanation of their research or project.'
    },
    {
      duration: '20 minutes',
      title: 'Q&A and Discussion',
      description: 'After the presentation, the floor is opened for questions and discussion. The audience can seek clarifications, explore deeper ideas, and engage with the speaker in a relaxed, conversational style'
    }
  ];
}

