import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackRouting} from './back.routing';
import {BackComponent} from './back.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { IconsComponent} from './icons/icons.component';
import {ComponentsModule} from './components/components.module';
import {MapsComponent} from './maps/maps.component';
import { NotificationsComponent} from './notifications/notifications.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    ComponentsModule,
    BackRouting,
    CommonModule,
    ChartsModule
  ],
  declarations: [BackComponent, DashboardComponent  , IconsComponent , MapsComponent , NotificationsComponent ,
    TableListComponent , TypographyComponent , UpgradeComponent , UserProfileComponent ],
  providers: [],
  entryComponents: []
})
export class BackModule {
}
