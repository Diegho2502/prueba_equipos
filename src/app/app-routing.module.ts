import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioModule } from './pages/inicio/inicio.module';
import { LoginModule } from './pages/login/login.module';
import { MenuComponent } from './util/components/menu/menu.component';
import { AdminModule } from './pages/admin/admin.module';
import { PermisosGuard } from './permisos.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch : 'full',
    loadChildren:()=>InicioModule,
  },
  {
    path:'admin',
    canActivate:[PermisosGuard],
    loadChildren:()=>AdminModule,
  },
  {
    path:'login',
    pathMatch : 'full',
    loadChildren:()=>LoginModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
