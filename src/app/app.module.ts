// Librerias reservadas de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Libreria de rutas
import { AppRoutingModule } from './app-routing.module';

// Libreria para formularios
import { FormsModule } from '@angular/forms';

// Componentes
import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-vg58e-nr.us.auth0.com',
      clientId: 'E40VlcW2ImNhbJPqaPDsW8wPovdDzS9O',
       // Request this audience at user authentication time
       audience: "https://dev-vg58e-nr.us.auth0.com/api/v2/",

      // Request this scope at user authentication time
      scope: "read:current_user",

  // Specify configuration for the interceptor              
  httpInterceptor: {
    allowedList: [
      {
        uri: 'https://dev-vg58e-nr.us.auth0.com/api/v2/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://dev-vg58e-nr.us.auth0.com/api/v2/',

          // The attached token should have these scopes
          scope: 'read:current_user'
        }
      }
    ]
  }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
