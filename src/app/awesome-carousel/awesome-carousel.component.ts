import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-awesome-carousel',
  templateUrl: './awesome-carousel.component.html',
  styleUrls: ['./awesome-carousel.component.css'],
})
export class AwesomeCarouselComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('itemsContainer')
  itemsContainer!: ElementRef;

  @ViewChild('scrolleableIndicator')
  scrolleableIndicator!: ElementRef;

  @Input('areActionButtonsVisible')
  areActionButtonsVisible: boolean = false;

  @Input('values')
  public values: any[] = [];

  @Input('itemsTemplate')
  public template!: TemplateRef<any>;

  public moveBack() {
    this.CurrentIndex--;
  }
  public moveForward() {
    this.CurrentIndex++;
  }

  // indicates which element of 'values' collection is being showed in the carousel
  private currentIndex: number = 0;

  // indicates the same value as currentIndex but its value is updated after
  // the smooth scroll animation of the carousel
  public animatedCurrentIndex: number = 0;

  get CurrentIndex() {
    return this.currentIndex;
  }

  isCurrentIndexTop() {
    return this.currentIndex === this.values.length - 1;
  }
  isCurrentIndexBottom() {
    return this.currentIndex === 0;
  }

  set CurrentIndex(value: number) {
    // validate the new value
    if (value < 0 || value >= this.values.length) {
      return;
    }

    this.currentIndex = value;

    // #region Scroll operation for main container

    var containerElement = this.itemsContainer.nativeElement;

    // get a reference to the child element to which I need to scroll
    var element = containerElement.children[this.currentIndex];

    // get the offset of the element relative to the parent
    var offset = element.offsetLeft;

    // perform the scroll operation of the parent element
    containerElement.scrollLeft = offset;

    containerElement.addEventListener();

    // #endregion
    // note: the indicator will be scrolled after the smooth scroll operation has finished
    // see handler for scroll event in ngAfterViewInit() method...
  }

  private scrollIndicator() {
    // #region Scroll operation for indicators container
    // get the reference to the indicators container
    var parentIndicator = this.scrolleableIndicator.nativeElement;
    var childIndicator = parentIndicator.children[this.currentIndex];

    // === get the width for the parent and the child ===
    var parentWidth = parentIndicator.offsetWidth;
    console.log(`ParentWidth: ${parentWidth}`);

    var childWidth = childIndicator.offsetWidth;
    console.log(`ChildWidth: ${childWidth}`);

    // === calculate the space required between the left border of the parent and
    // the left border of the child to garantee the child will be in the middle of the
    // parent view port ===
    var space = parentWidth / 2 - childWidth / 2;
    console.log(`space: ${space}`);

    var scrollPosition = childIndicator.offsetLeft - space;
    console.log(`offsetLeft: ${childIndicator.offsetLeft}`);
    console.log(`scrollPosition: ${scrollPosition}`);

    parentIndicator.scrollLeft = scrollPosition;

    // #endregion
  }

  ngAfterViewInit(): void {
    // #region handler for the scroll event of indicator container
    let timer: any;
    // the reason for this handler is because there is not any event
    // fired when the animation of the smooth scrolling operation ends
    // so the system I will use 'scroll' event of the element to start a timming
    // function which is reset in the meanwhile the event is still being fired
    // when the event stop being fired for an ammount of time I will execute the callback()
    // assuming that the scrolling animation has ended
    this.itemsContainer.nativeElement.addEventListener(
      'scroll',
      () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          this.scrollIndicator();
          this.animatedCurrentIndex = this.currentIndex;
        }, 100);
      },
      { passive: true }
    );
    // #endregion

    //this.executeTestingCode();
  }

  private executeTestingCode() {
    // #region *** Just some testing code ***

    let direction = true;
    // start timing function for the scrolling operation
    setInterval(() => {
      if (direction) {
        this.CurrentIndex++;
        if (this.CurrentIndex >= this.values.length - 1) {
          direction = false;
        }
      } else {
        this.CurrentIndex--;
        if (this.CurrentIndex <= 0) {
          direction = true;
        }
      }
    }, 500);

    // #endregion
  }
}
