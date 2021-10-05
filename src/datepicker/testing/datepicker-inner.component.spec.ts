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

  describe('onInit method', () => {
    it('case initDate is valid', () => {
      component.initDate = new Date();

      component.ngOnInit();

      expect(component.activeDate).toBe(component.initDate);
    });

    it('should emit a new update activeDate', () => {
      component.initDate = new Date('2021-10-03');
      const updateEmit = jest.spyOn(component.update, 'emit');

      component.ngOnInit();

      expect(updateEmit).toHaveBeenCalledWith(component.activeDate);
    });

    it('case activateDate is undefined', () => {
      component.initDate = undefined;

      component.ngOnInit();

      expect(component.activeDate).not.toBe(component.initDate);
    });

  });

  describe('ngOnChanges', () => {
    it('should call refreshView method', () => {
      const refreshExpected = jest.spyOn(component, 'refreshView');
      
      component.ngOnChanges({});
      
      expect(refreshExpected).toHaveBeenCalled();
    });

    it('should call checkIfActiveDateGotUpdate method', () => {
      const checkExpected = jest.spyOn(component, 'checkIfActiveDateGotUpdated');

      component.ngOnChanges({activeDate: null});

      expect(checkExpected).toHaveBeenCalledWith(null);
    });
  });
});
