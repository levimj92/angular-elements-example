import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {createCustomElement} from '@angular/elements';
import {MaterialSnackbarComponent} from './material-snackbar/material-snackbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MaterialSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(MaterialSnackbarComponent, {injector});
    customElements.define('app-material-snackbar', element);
  }
}
