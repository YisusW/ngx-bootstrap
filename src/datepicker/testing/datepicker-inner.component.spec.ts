import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerInnerComponent } from '../datepicker-inner.component';

describe('datepicker-inner:', () => {
  let fixture: ComponentFixture<DatePickerInnerComponent>;
  let component: DatePickerInnerComponent;

  beforeEach(
    waitForAsync(() =>
      TestBed.configureTestingModule({
        declarations: [DatePickerInnerComponent],
        imports: [BrowserAnimationsModule]
      }).compileComponents()
    )
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerInnerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
