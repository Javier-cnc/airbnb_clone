import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-menu-caption',
  templateUrl: './house-menu-caption.component.html',
  styleUrls: ['./house-menu-caption.component.css'],
})
export class HouseMenuCaptionComponent {
  @Input('model')
  public houseModel: { images: string[] } = { images: [] };

  public state: boolean = false;
  public heart_icon_path: string =
    'm16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z';

  public houses: any[] = [];
  public toggleState() {
    this.state = !this.state;
  }
  public areButtonsVisible: boolean = false;

  public changeButtonsVisibility(state: boolean) {
    this.areButtonsVisible = state;
  }
}
