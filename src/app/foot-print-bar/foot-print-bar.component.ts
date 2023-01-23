import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

enum ScrollDirection {
  UP,
  DOWN,
}

@Component({
  selector: 'app-foot-print-bar',
  templateUrl: './foot-print-bar.component.html',
  styleUrls: ['./foot-print-bar.component.css'],
})
export class FootPrintBarComponent implements OnInit {
  constructor(private breakpointerObserver: BreakpointObserver) {
    // subscribe to the breaking point observer to be notified when the
    // window redimension enough to change the way the chat panels show up
    this.breakpointerObserver
      .observe([`(max-width: ${'768px'})`])
      .subscribe((res) => {
        if (res.matches) {
          this.isNavigationBarCollapsable = true;
        } else {
          this.isNavigationBarCollapsable = false;
        }
      });
  }

  public isNavigationBarVisible: boolean = true;
  public isNavigationBarCollapsable: boolean = true;
  public isInformationBarVisible: boolean = true;

  public currentNavigationButtonSelected: string = 'Explorar';

  ngOnInit(): void {
    // register the document scroll event handler
    document.addEventListener(
      'scroll',
      this.globalScrollEventHandler.bind(this)
    );
  }

  ngOnDestroy(): void {
    // unregister the document scroll event handler
    document.removeEventListener('scroll', this.globalScrollEventHandler);
  }

  // #region Scrolling Process

  // hold the last value of the scrolling position of the window element
  private lastScrollPosition: number = 0;

  // hold the last value of the direction to where the scroll was made (UP or DOWN)
  private lastScrollingDirection: ScrollDirection = ScrollDirection.UP;

  private get LastScrollingDirection(): ScrollDirection {
    return this.lastScrollingDirection;
  }

  private set LastScrollingDirection(value: ScrollDirection) {
    this.lastScrollingDirection = value;

    // update the visibility value of the navigation bar in the foot-bar using the value of the current scrolling direction
    this.isNavigationBarVisible = value === ScrollDirection.UP ? true : false;
  }

  private globalScrollEventHandler(ev: Event) {
    let currentPosition = window.pageYOffset;

    if (this.lastScrollPosition < currentPosition) {
      // the scroll direction was down
      if (this.LastScrollingDirection != ScrollDirection.DOWN) {
        console.log('Scroll direction DOWN');
        this.LastScrollingDirection = ScrollDirection.DOWN;
        this.isInformationBarVisible = false;
      }
    } else {
      // the scroll direction was up
      if (this.LastScrollingDirection != ScrollDirection.UP) {
        console.log('Scroll direction UP');
        this.LastScrollingDirection = ScrollDirection.UP;
      }
    }

    this.lastScrollPosition = currentPosition;
    if (currentPosition === 0) {
      this.isInformationBarVisible = true;
    }
  }

  // #endregion
}
