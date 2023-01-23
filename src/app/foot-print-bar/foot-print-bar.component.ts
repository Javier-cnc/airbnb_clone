import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

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
      .observe([`(max-width: ${'790px'})`])
      .subscribe((res) => {
        if (res.matches) {
          this.isNavigationBarVisible = true;
          console.log('visualization: false');
        } else {
          this.isNavigationBarVisible = false;
          console.log('visualizacion: true');
        }
      });
  }

  isNavigationBarVisible: boolean = true;

  ngOnInit(): void {}
}
