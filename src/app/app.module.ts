import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundo } from './primercomponente/primercomponente';
import { ComponenteGeneradoComponent } from './componente-generado/componente-generado.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HexAndVowelPipe } from './hex-and-vowel.pipe';
import { MyForDirective } from './primercomponente/directivas/my-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    ComponenteGeneradoComponent,
    HexAndVowelPipe,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
