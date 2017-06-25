import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './appComponent/app.component';
import { HalfBackgroundComponent } from './half-background/half-background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    HalfBackgroundComponent,
    NavbarComponent,
    MessageComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [ WebService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
