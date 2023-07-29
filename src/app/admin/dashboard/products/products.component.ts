import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { DashboardService } from '../dashboard.service';
import { ModalService } from '../../services/modal.service';
import { response } from 'express';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'shopping-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  categoryArr: Category[] = [];
  products: Product[] = [];
  constructor(
    private fb: FormBuilder,
    private dashBoardService: DashboardService,
    private modalService: ModalService
  ) {
    this.productForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      offer: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      inStock: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });
    this.getProducts();
  }

  getCategory() {
    this.dashBoardService.getAllCategories().subscribe((response) => {
      this.categoryArr = response.data;
    });
  }

  getProducts() {
    this.dashBoardService.getProducts().subscribe((response: any) => {
      this.products = response;
      console.log(response);
    });
  }

  addProduct() {
    this.dashBoardService
      .addProduct(this.productForm.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  ngOnInit(): void {
    this.getCategory();
  }
  openModal() {
    this.modalService.openModal('#addProductModal');
  }
}
