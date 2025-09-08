import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { InTheBoxComponent } from './in-the-box/in-the-box.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { SetupInstructionsComponent } from './setup-instructions/setup-instructions.component';
import { UsageInstructionsComponent } from './usage-instructions/usage-instructions.component';
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { MaintenanceCareComponent } from './maintenance-care/maintenance-care.component';
import { WarrantySupportComponent } from './warranty-support/warranty-support.component';
import { BackgroundCanvasComponent } from './background-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductOverviewComponent,
    InTheBoxComponent,
    KeyFeaturesComponent,
    SetupInstructionsComponent,
    UsageInstructionsComponent,
    TroubleshootingComponent,
    MaintenanceCareComponent,
    WarrantySupportComponent,
    BackgroundCanvasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
