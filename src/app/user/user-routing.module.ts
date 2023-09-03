import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {UserComponent} from './user.component'

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./core/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./shared/standalone/product/product.component').then(
            (mod) => mod.ProductComponent
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./features/components/search/search.component').then(
            (mod) => mod.SearchComponent
          ),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./features/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
