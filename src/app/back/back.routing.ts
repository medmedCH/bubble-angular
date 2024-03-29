import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IconsComponent} from './icons/icons.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {AuthGuard} from '../app-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BackComponent,
    children: [
      {path: '', component: DashboardComponent ,
        canActivate: [AuthGuard], data: { roles: ['admin'] }},
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user-profile',   component: UserProfileComponent ,canActivate: [AuthGuard],data: { roles: ['admin'] }},
      { path: 'table-list',     component: TableListComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
