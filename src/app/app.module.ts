
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';

import { AppComponent } from './app.component';
import { TransportadoraFormComponent } from './transportadora-form/transportadora-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportadoraFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
