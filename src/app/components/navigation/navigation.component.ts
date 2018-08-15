import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { CustomRoute } from './models/custom-route.model';
import { routes } from '../../../config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('navigationWrapper') private navWrapper: ElementRef;

  public title = 'ARKADIY KOLENDA';
  public subTitle = 'FINGERSTYLE BASS PLAYER';
  public routes: CustomRoute[] = routes;
  public burgerShown: boolean;
  public burgerOpened = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isBurgerShown();
  }

  ngAfterViewInit(): void {
    this.checkWidth();
  }

  public burgerClicked(): void {
    this.burgerOpened = !this.burgerOpened;
  }

  @HostListener('window: resize')
  private checkWidth(): void {
    this.isBurgerShown();
    if (this.navWrapper.nativeElement.clientWidth > 960) {
      this.burgerOpened = false;
    }
  }

  private isBurgerShown(): void {
    this.burgerShown = this.navWrapper.nativeElement.clientWidth <= 960;
  }
}
