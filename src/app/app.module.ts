import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgPipesModule } from 'ng-pipes';
import { NgsRevealModule } from 'ngx-scrollreveal';

// import { registerLocaleData } from '@angular/common';
// import ptBr from '@angular/common/locales/pt';
// registerLocaleData(ptBr)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UniquePipe } from './pipes/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    OrderByPipe,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgPipesModule,
    NgsRevealModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
