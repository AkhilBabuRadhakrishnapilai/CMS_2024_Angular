import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtestComponent } from './newtest/newtest.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {path:'newtest',component:NewtestComponent,loadChildren :()=>import('./newtest/newtest.module')
    .then(x=>x.NewtestModule)
  },
  { path:'shared',component:SharedComponent,loadChildren : ()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
