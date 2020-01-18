import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
//import { DataTableModule } from 'angular7-data-table/datatable.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { DataTableModule } from 'angular7-data-table';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [

    SharedModule,

    RouterModule.forChild([
      {
      path:'admin/products',
      component:AdminProductsComponent,
      canActivate:[AuthGuard,AdminAuthGuard]
    },
    { path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate:[AuthGuard,AdminAuthGuard]
      },
      { path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate:[AuthGuard,AdminAuthGuard]
      },
      {
      path:'admin/orders',
      component:AdminOrdersComponent,
      canActivate:[AuthGuard,AdminAuthGuard]
    },
    ])
  ]
})
export class AdminModule { }
