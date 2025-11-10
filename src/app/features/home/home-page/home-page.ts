import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/layout/header/header';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { HeroSectionComponent } from '../hero-section/hero-section';
import { ThreeXsSectionComponent } from '../three-xs-section/three-xs-section';
import { CoreDomainsSectionComponent } from '../core-domains-section/core-domains-section';
import { PresentationsSectionComponent } from '../presentations-section/presentations-section';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ThreeXsSectionComponent,
    CoreDomainsSectionComponent,
    PresentationsSectionComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {
}

