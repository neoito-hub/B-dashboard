import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { TopbarComponent } from '../../component/topbar/topbar.component';
import { ContentComponent } from '../../component/content/content.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NewEformComponent } from '../../component/new-eform/new-eform.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    LayoutComponent,
    DashboardComponent,
    NewEformComponent
  ],
  exports: []
})
export class LayoutModule {}
