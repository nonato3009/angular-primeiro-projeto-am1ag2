import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Button } from './components/button.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  declarations: [
    AppComponent,
    Button,
    MenuComponent,
    HelloComponent,
    EntryDataComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
