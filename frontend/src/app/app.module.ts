import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UsuariosModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
