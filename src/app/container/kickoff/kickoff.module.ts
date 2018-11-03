import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KickoffComponent } from './kickoff.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: KickoffComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [KickoffComponent]
})
export class KickoffModule {}
