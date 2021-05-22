import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookAddService } from './book-add.service';
import { categories } from './category.model';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
})
export class BookAddComponent implements OnInit {
  public form!: FormGroup;
  public imagePreview?: string;
  public categories = categories;

  constructor(
    private bookAddService: BookAddService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl(null,{validators: [Validators.required]}),
      description: new FormControl(null),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
      author: new FormControl(null,{validators: [Validators.required]}),
      categories: this.fb.array([],{validators: [Validators.required]}),
    });
  }

  onImagePicked(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    let file: File;

    if (!input || !input.files || !input.files[0]) {
      return;
    }

    file = input.files[0];

    if (!file) {
      return;
    }

    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onChange(category: string, isChecked: boolean) {
    const categoriesFormArray = <FormArray>this.form.controls.categories;
    if (isChecked) {
      categoriesFormArray.push(new FormControl(category));
    } else {
      let index = categoriesFormArray.controls.findIndex(
        (x) => x.value === category
      );

      categoriesFormArray.removeAt(index);
    }
  }

  onBookAdd() {
    if (this.form.invalid) {
      console.log('is invalid');
      return;
    }
    this.bookAddService.addBook({
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      author: this.form.value.author,
      category: this.form.value.categories,
      rate: this.form.value.null
    });
    this.form.reset();
  }
}
