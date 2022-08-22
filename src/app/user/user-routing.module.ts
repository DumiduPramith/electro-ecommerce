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
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
