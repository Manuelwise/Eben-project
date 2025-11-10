import { Directive, ElementRef, OnInit, OnDestroy, inject, NgZone, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private zone = inject(NgZone);
  private observer: IntersectionObserver | null = null;
  private animationFrameId: number | null = null;
  private ticking = false;
  private sectionIndex = 0;
  private static sectionCounter = 0;
  private static lastAnimatedSection = -1;
  private static readonly SECTION_DELAY = 200; // ms delay between sections
  private static sections: HTMLElement[] = [];
  private static isInitialized = false;

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    this.sectionIndex = ScrollAnimationDirective.sectionCounter++;
    ScrollAnimationDirective.sections[this.sectionIndex] = element;
    
    // Set initial styles
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px)');
    this.renderer.setStyle(element, 'transition', 'opacity 0.6s ease-out, transform 0.6s ease-out');
    this.renderer.setStyle(element, 'willChange', 'opacity, transform');
    
    // Only apply delay to subsequent sections, not the first one
    if (this.sectionIndex > 0) {
      this.renderer.setStyle(element, 'transitionDelay', `${ScrollAnimationDirective.SECTION_DELAY}ms`);
    }
    
    // Reset the lastAnimatedSection if we're at the top of the page
    if (window.scrollY < 100) {
      ScrollAnimationDirective.lastAnimatedSection = -1;
    }
    
    // Initialize the first section immediately
    if (this.sectionIndex === 0) {
      this.animateIn(element);
      ScrollAnimationDirective.lastAnimatedSection = 0;
    }

    // Use IntersectionObserver for better performance
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Only animate if this is the next section in sequence
              if (this.sectionIndex <= ScrollAnimationDirective.lastAnimatedSection + 1) {
                this.animateIn(entry.target as HTMLElement);
                ScrollAnimationDirective.lastAnimatedSection = this.sectionIndex;
                // Don't unobserve yet, we want to keep tracking for potential scroll-up scenarios
              }
            } else if (this.sectionIndex === ScrollAnimationDirective.lastAnimatedSection) {
              // If scrolling up past the current section, update the last animated section
              const rect = entry.boundingClientRect;
              if (rect.top > window.innerHeight) {
                ScrollAnimationDirective.lastAnimatedSection = Math.max(0, this.sectionIndex - 1);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -30% 0px', // Slightly more aggressive trigger point
          threshold: 0.2
        }
      );

      // Set up scroll listener to handle sequential animations
      window.addEventListener('scroll', this.onScroll, { passive: true });
      
      // Initial check
      this.checkVisibility();
      
      // Observe the element
      this.observer.observe(element);
    });
  }

  private onScroll = () => {
    if (!this.ticking) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.checkVisibility();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  private checkVisibility() {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if element is in or near viewport
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    const isInView = elementTop <= windowHeight * 0.8 && elementBottom >= -100; // Slightly above the viewport
    
    if (isInView) {
      // If scrolling down and this is the next section in sequence
      if (this.sectionIndex > ScrollAnimationDirective.lastAnimatedSection) {
        this.animateIn(element);
        ScrollAnimationDirective.lastAnimatedSection = this.sectionIndex;
      } 
      // If scrolling up and this section is above the last animated one
      else if (this.sectionIndex < ScrollAnimationDirective.lastAnimatedSection) {
        this.animateIn(element);
      }
    } else if (elementBottom < 0) {
      // If scrolled past the element (above viewport)
      if (this.sectionIndex <= ScrollAnimationDirective.lastAnimatedSection) {
        this.animateOut(element);
      }
    }
  }

  private animateOut(element: HTMLElement) {
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px)');
    // Reset the last animated section to the previous one
    if (this.sectionIndex === ScrollAnimationDirective.lastAnimatedSection) {
      ScrollAnimationDirective.lastAnimatedSection = Math.max(0, this.sectionIndex - 1);
    }
  }

  private animateIn(element: HTMLElement) {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    // Only animate if not already visible
    const currentOpacity = window.getComputedStyle(element).opacity;
    if (currentOpacity !== '1') {
      this.renderer.setStyle(element, 'opacity', '1');
      this.renderer.setStyle(element, 'transform', 'translateY(0)');
    }
    
    // Update last animated section if this is a new section coming into view
    if (this.sectionIndex > ScrollAnimationDirective.lastAnimatedSection) {
      ScrollAnimationDirective.lastAnimatedSection = this.sectionIndex;
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('scroll', this.onScroll);
    
    // Clean up
    if (ScrollAnimationDirective.sections[this.sectionIndex]) {
      delete ScrollAnimationDirective.sections[this.sectionIndex];
    }
    
    // Reset the counter if this is the last instance
    if (ScrollAnimationDirective.sectionCounter > 0) {
      ScrollAnimationDirective.sectionCounter--;
      
      // If this was the last section, reset everything
      if (ScrollAnimationDirective.sectionCounter === 0) {
        ScrollAnimationDirective.lastAnimatedSection = -1;
        ScrollAnimationDirective.sections = [];
      }
    }
  }
}

