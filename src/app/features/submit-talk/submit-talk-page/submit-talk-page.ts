import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../../components/layout/header/header';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ScrollAnimationDirective } from '../../../lib/scroll-animation.directive';

interface PresentationSegment {
  duration: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-submit-talk-page',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HeaderComponent, 
    FooterComponent,
    ScrollAnimationDirective
  ],
  templateUrl: './submit-talk-page.html',
  styleUrl: './submit-talk-page.scss'
})
export class SubmitTalkPageComponent {
  talkForm: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);

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

  constructor(private fb: FormBuilder) {
    this.talkForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      affiliation: [''],
      aboutYourself: ['', Validators.required],
      researchTitle: ['', Validators.required],
      researchAbstract: ['', Validators.required],
      paperLink: ['']
    });
  }

  onSubmit() {
    if (this.talkForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Talk submission:', this.talkForm.value);
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.talkForm.reset();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 3000);
      }, 1000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.talkForm.controls).forEach(key => {
        this.talkForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.talkForm.get(fieldName);
    if (field?.hasError('required') && field.touched) {
      return 'This field is required';
    }
    if (field?.hasError('email') && field.touched) {
      return 'Please enter a valid email address';
    }
    return '';
  }
}
