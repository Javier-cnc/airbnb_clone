import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private isFilterDialogVisible: boolean = false;

  private isFilterDialogVisible_Notifier: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isFilterDialogVisible);

  get IsFilterDialogVisible_Notifier(): Observable<boolean> {
    return this.isFilterDialogVisible_Notifier;
  }

  set IsFilterDialogVisible(value: boolean) {
    if (value === this.isFilterDialogVisible) {
      return;
    }

    // update the old value
    this.isFilterDialogVisible = value;

    // notify to the rest of the application about the change
    this.isFilterDialogVisible_Notifier.next(value);
  }

  get IsFilterDialogVisible(): boolean {
    return this.isFilterDialogVisible;
  }
}
