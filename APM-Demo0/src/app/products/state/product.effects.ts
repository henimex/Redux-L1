import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService) {
  }

  loadProducts = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() = this.productService.getProducts().pipe(
        map(products => ProductActions.loadProductsSuccess({ products }))
      ))
    );
  });
}

// Repeat on Chepter 8 L4
// https://app.pluralsight.com/course-player?clipId=8974b8da-5ae1-4334-a7cc-247956813ea3
