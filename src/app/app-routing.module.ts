import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportadoraFormComponent } from './transportadora-form/transportadora-form.component';

const routes: Routes = [
  {path: 'transportadora-form', component: TransportadoraFormComponent}

];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
