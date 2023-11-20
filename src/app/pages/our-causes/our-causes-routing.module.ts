import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurCausesComponent } from './our-causes.component';

const routes: Routes = [
  {
    path: '',
    component: OurCausesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'our-causes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurCausesRoutingModule {}
