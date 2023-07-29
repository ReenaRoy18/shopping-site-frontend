import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
  ],
  imports: [
    DashboardRouting,
    CommonModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
