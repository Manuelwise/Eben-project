import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  email = signal('');
  currentYear = new Date().getFullYear();

  handleNewsletterSubmit() {
    console.log('Newsletter signup:', this.email());
    // Add newsletter signup logic here
    this.email.set('');
  }
}

