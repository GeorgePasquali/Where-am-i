import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './appComponent/app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HalfBackgroundComponent } from './half-background/half-background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
//import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HalfBackgroundComponent,
    NavbarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
