import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product:any= {};
  id;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$= categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe (p => this.product = p)
   }

  ngOnInit() {
  }
  save(product){  
    if(this.id) this.productService.update(this.id,product);
     else
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
  delete(){
    if(!confirm('are you sure you want to delete this product ? ')) return;
      this.productService.delete(this.id);
      this.router.navigate(['admin/products']);
    
  } 

}
