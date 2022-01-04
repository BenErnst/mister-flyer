import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';
import { DestinationResolverService } from './services/destination-resolver.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DestinationEditComponent } from './pages/destination-edit/destination-edit.component';

const routes: Routes = [
  {
    path: 'destination/edit/:id',
    component: DestinationEditComponent,
    resolve: { destination: DestinationResolverService },
  },
  {
    path: 'destination/edit',
    component: DestinationEditComponent,
  },
  {
    path: 'destination/:id',
    component: DestinationDetailsComponent,
    resolve: { destination: DestinationResolverService },
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
