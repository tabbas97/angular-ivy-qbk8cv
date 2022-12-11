import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ShowListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
