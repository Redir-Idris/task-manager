import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule
  ],
})

export class AppModule { }

/* 
RouterModule.forRoot() startar routing i appen.
Vi använder lazy loading med loadChildren för att bara ladda moduler när de behövs (bra för prestanda).
Path '' (tom) skickar användaren till /dashboard som startsida.
*/