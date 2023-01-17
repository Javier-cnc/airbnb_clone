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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { FootPrintBarComponent } from './foot-print-bar/foot-print-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    InformationBarComponent,
    FiltersBarComponent,
    FootPrintBarComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
