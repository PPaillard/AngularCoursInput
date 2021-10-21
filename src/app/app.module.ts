import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DescCutPipe } from './shared/pipe/desc-cut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    DescCutPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
