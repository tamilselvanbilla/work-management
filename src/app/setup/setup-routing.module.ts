import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SetupComponent } from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
