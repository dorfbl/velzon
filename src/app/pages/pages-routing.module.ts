import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent
    },
    {
      path: 'starter', component: StarterComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
