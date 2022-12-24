import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './done/done.component';
import { OpenComponent } from './open/open.component';

const routes: Routes = [
  // create path for the root of the application and redirect to the home page
  // create also path form components: home, Done.
  { path: '', redirectTo: '/open', pathMatch: 'full' },
  { path: 'done', component: DoneComponent },
  { path: 'open', component: OpenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
