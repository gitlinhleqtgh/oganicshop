import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './core/components/login/login.component';
import { environment } from './../environments/environment';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';


// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyCpc2ML_9qGbVV0w6y7Peva0tKaBjpOclE",
  authDomain: "oganicshop-cd79b.firebaseapp.com",
  databaseURL: "https://oganicshop-cd79b.firebaseio.com",
  projectId: "oganicshop-cd79b",
  storageBucket: "oganicshop-cd79b.appspot.com",
  messagingSenderId: "124314007696",
  appId: "1:124314007696:web:46f36844af9150657a4015",
  measurementId: "G-QPDHWCET7P"

};

@NgModule({
  declarations: [
    AppComponent,
    ],   
  imports: [
    CoreModule,
    ShoppingModule,
    SharedModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config,environment.firebase),
    AngularFirestoreModule, // firestore
     // auth
    AngularFireStorageModule,
    
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'login',component:LoginComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
