import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'size',
  templateUrl: './size.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SizeComponent),
      multi: true
    }
  ],
  styleUrls: ['./size.component.css']
})

export class SizeComponent implements ControlValueAccessor {

  private _size: string;
  OnChangefn = (_) => _;

  public get size(): string {
    return this._size;
  }

  public set size(value: string) {
    this._size = value;
  }

  setSize(size) {
    this.size = size;
    this.OnChangefn(this.size);
  }
  writeValue(obj: any): void {
    this.size = obj;
  }
  registerOnChange(fn: any): void {
    this.OnChangefn = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState(isDisabled: boolean): void {

  }
}
