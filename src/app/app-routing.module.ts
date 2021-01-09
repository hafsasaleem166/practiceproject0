import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent} from './history/history.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'history',
   component:HistoryComponent},
  {
     path:'about',
     component:AboutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
