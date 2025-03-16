import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SimpleButtonComponent} from '../../components/simple-button/simple-button.component';
import {NgIf} from '@angular/common';

export interface preparedStringInterface {
  reversedAndSlicedStringArray: string[];
  preparedRemainderString: string;
}

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, SimpleButtonComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  strForm!: FormGroup;
  zigZagResult: string | null = null;

  constructor(private fb: FormBuilder) {
    this.strForm = this.fb.group({
      str: ['SEMSOBRAS', Validators.required],
      lineLength: [3, Validators.required],
    });
  }

  getStrFormValue(event: Event): void {
    this.zigZagResult = null
    event.preventDefault();
    const form: any = this.strForm.value;
    this.zigZagResult = this.zigZag(form.str, form.lineLength);
  }

  zigZag(str: string, x: number): string {
    const slicedStringArray: string[] = this.sliceString(str, x);
    const remainderString: string = this.getRemainderString(slicedStringArray, str);
    const preparedString: preparedStringInterface = this.reverseString(slicedStringArray, remainderString);
    return this.distributeRemainder(preparedString.reversedAndSlicedStringArray, preparedString.preparedRemainderString) ?? '';
  }

  sliceString(str: string, x: number): string[] {
    const partSize: number  = Math.floor(str.length / x);
    const slicedString: string[] = [];
    for (let i: number = 0; i < x; i++) {
      const start: number = i * partSize ;
      let end: number = (i + 1) * partSize ;

      if (end > str.length) {
        end = str.length;
      }
      slicedString.push(str.slice(start, end));
    }
    return slicedString;
  }

  getRemainderString(slicedStringArray: string[], originalString: string): string {
    const slicedStringSize: number = slicedStringArray.join('').length;
    const originalStringSize: number = originalString.length;
    return originalString.slice(slicedStringSize, originalStringSize);
  }



  reverseString(slicesArray: string[], remainderString: string): preparedStringInterface {
    slicesArray.push(remainderString);
    const reversedStringArray: string[] = [];
    for (let i: number = 0; i < slicesArray.length; i++) {
      if (i !== 0 && i % 2 !== 0) {
        reversedStringArray.push(slicesArray[i].split("").reverse().join(""));
      } else {
        reversedStringArray.push(slicesArray[i]);
      }
    }
    const remainder: string = reversedStringArray.pop() ?? '';
    return {reversedAndSlicedStringArray: reversedStringArray, preparedRemainderString: remainder}
  };


  distributeRemainder(slicedStringArray: string[], remainderString: string): string {
    remainderString = remainderString.split('').reverse().join('')
    for (let i: number = 0; i < remainderString.length; i++) {
      if (i % 2 !== 0) {
        slicedStringArray.push(remainderString[i]);
      } else {
        slicedStringArray.unshift(remainderString[i]);
      }
    }
    return slicedStringArray.join('');
  }

}
