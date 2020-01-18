import { Product } from './product';

export class ShopingCartItem{
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShopingCartItem>){
        Object.assign(this, init);
    }

    get totalPrice(){ return this.price * this.quantity;}
}