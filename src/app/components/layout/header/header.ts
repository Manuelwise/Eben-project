import { Component, signal, OnInit, OnDestroy, inject, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideX } from '@ng-icons/lucide';

declare const window: Window & typeof globalThis;

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, NgIconComponent],
  providers: [provideIcons({ lucideMenu, lucideX })],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private document = inject(DOCUMENT) as Document;
  isMobileMenuOpen = signal(false);
  isVisible = signal(true);
  lastScrollY = signal(0);
  
  private scrollListener?: () => void;

  ngOnInit() {
    this.lastScrollY.set(window.scrollY || 0);
    
    this.scrollListener = () => {
      const currentScrollY = window.scrollY || 0;
      const scrollingDown = currentScrollY > this.lastScrollY();
      const scrollDifference = Math.abs(currentScrollY - this.lastScrollY());
      
      // Only hide/show if scroll difference is significant (prevents flickering)
      if (scrollDifference > 5) {
        // Hide header when scrolling down past threshold, show when scrolling up
        if (scrollingDown && currentScrollY > 80) {
          this.isVisible.set(false);
        } else if (!scrollingDown || currentScrollY <= 80) {
          this.isVisible.set(true);
        }
      }
      
      this.lastScrollY.set(currentScrollY);
    };
    
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
