import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'/products', pathMatch:"full" },
  { path: '', loadChildren: () => import('./src/app/product/product.module').then( m => m.ProductModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
