import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

export class CoreModule { }

/* 

Här skapar vi två services som hanterar alla API-anrop
mot DummyJSON. HttpClient används för att kommunicera med API:t. 
HttpClientModule måste importeras för att det ska fungera.

*/