import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }
  get(productId){
    return this.db.object('/products/' + productId);
  }
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
  getAll(){
    return this.db.list('/products').snapshotChanges()
    .pipe(
        map(actions =>
          actions.map(a => ({ key: a.key, ...a.payload.val() } as Product))
        )
    );
  //  return this.db.list('/products');
  
  }
  
}
