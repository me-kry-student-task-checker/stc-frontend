import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        data: {
          pageTitle: 'Users',
        },
      },
      {
        path: 'audits',
        loadChildren: () => import('./audits/audits.module').then(m => m.AuditsModule),
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
      },
    ]),
  ],
})
export class AdminRoutingModule {}
