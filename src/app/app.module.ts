import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

// Angular material
import { MatIconModule } from '@angular/material/icon';

// PrimeNG modules
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { InformationBarComponent } from './components/information-bar/information-bar.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { FootPrintBarComponent } from './components/foot-print-bar/foot-print-bar.component';
import { HouseMenuCaptionComponent } from './components/house-menu-caption/house-menu-caption.component';
import { AwesomeCarouselComponent } from './components/awesome-carousel/awesome-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    InformationBarComponent,
    FiltersBarComponent,
    FootPrintBarComponent,
    HouseMenuCaptionComponent,
    AwesomeCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    MenuModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
