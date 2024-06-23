import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pv-frontend/gift-voucher-journey').then(
        (m: typeof import('@pv-frontend/gift-voucher-journey')) =>
          m.PvGiftVouchersModule
      ),
  },
  {
    path: '**',
    loadComponent: () => import('./empty-route/empty-route.component').then(m => m.EmptyRouteComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule],
})
export class AppRoutingModule {}
