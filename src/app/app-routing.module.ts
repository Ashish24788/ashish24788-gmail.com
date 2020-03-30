import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from "./product-list/product-list.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'pokemon',
    component: PokemonListComponent,
  },
  {
    path: 'detail/:name',
    component: ProductDetailComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
