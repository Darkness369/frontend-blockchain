import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: HomeComponent},
  { path: 'protegida', component: ProtegidaComponent, canActivate:[AuthGuard] },
  {path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
