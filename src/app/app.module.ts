import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationListComponent } from './cmps/destination-list/destination-list.component';
import { DestinationPreviewComponent } from './cmps/destination-preview/destination-preview.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';
import { DestinationFilterComponent } from './cmps/destination-filter/destination-filter.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AgmCoreModule } from '@agm/core';
import { DestinationEditComponent } from './pages/destination-edit/destination-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DestinationComponent,
    DestinationListComponent,
    DestinationPreviewComponent,
    DestinationDetailsComponent,
    DestinationFilterComponent,
    AppHeaderComponent,
    DestinationEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwGiZvHMgXknOgVGzfiqUHedPY-M9aRpM',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
