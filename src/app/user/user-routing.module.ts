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
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
