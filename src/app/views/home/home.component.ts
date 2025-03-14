import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SimpleButtonComponent} from '../../components/simple-button/simple-button.component';
import {NgIf} from '@angular/common';

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
    const lines: string[] = [];
    let result: string;
    for (let i: number = 0; i < str.length; i += x) {
      lines.push(str.slice(i, i + x));
    }
    for (let i: number = 0; i < lines.length; i++) {
      if (i % 2 !== 0) {
        lines[i] = lines[i].split("").reverse().join("");
      }
    }
    let remaining: string = "";
    if (lines[lines.length - 1].length < x) {
      remaining = lines.pop()!;
    }
    result = lines.join("");
    if (remaining) {
      for (let i: number = 0; i < remaining.length; i++) {
        if (i % 2 === 0) {
          result = remaining[i] + result;
        } else {
          result += remaining[i];
        }
      }
    }
    return result;
  }

}
