import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'shopping-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [];
  categoryForm: FormGroup;
  category!: Category;
  addNew = false;
  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name: new FormControl('', Validators.required),
      parent: new FormControl(''),
      parentName: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.dashboardService.getAllCategories().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  addSubCategory(category: Category) {
    this.addNew = true;
    this.categoryForm.setValue({
      name: '',
      parent: category._id,
      parentName: category.name,
    });
  }

  submit() {
    let params = this.categoryForm.value;
    this.dashboardService.addCategory(params).subscribe((response: any) => {
      console.log(response);
      this.getCategories();
      this.categoryForm.setValue({
        name: '',
        parent: params.parent,
        parentName: this.categoryForm.value.parentName,
      });
      this.categoryForm.controls['name'].markAsUntouched();
    });
  }

  showSubCatergories(_id: string) {
    this.dashboardService.getCategories({ _id }).subscribe((response) => {
      this.categories = response.data;
    });
  }

  deleteCategory(_id: string) {
    this.dashboardService.deleteCategory({ _id }).subscribe((response: any) => {
      let idx = this.categories.findIndex((category) => category._id === _id);
      this.categories.splice(idx, 1);
    });
  }

  cancel() {
    this.addNew = false;
    this.categoryForm.reset();
  }
}
