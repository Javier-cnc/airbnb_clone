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

    // #region Scroll operation

    var containerElement = this.itemsContainer.nativeElement;

    // get a reference to the child element to which I need to scroll
    var element = containerElement.children[this.currentIndex];

    // get the offset of the element relative to the parent
    var offset = element.offsetLeft;

    // perform the scroll operation of the parent element
    containerElement.scrollLeft = offset;

    // #endregion
  }

  ngAfterViewInit(): void {
    // this.executeTestingCode();
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
