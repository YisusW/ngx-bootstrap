import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-timepicker-empty-date',
  templateUrl: './empty-date.html'
})
export class DemoTimepickerEmptyDateComponent {
  allowEmptyTime = true;
  myTime: Date | undefined = new Date();
  isValid?: boolean;


  clear(): void {
    this.myTime = void 0;
  }
}
