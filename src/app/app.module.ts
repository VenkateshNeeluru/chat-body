import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatBodyComponent,
    ChatFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
