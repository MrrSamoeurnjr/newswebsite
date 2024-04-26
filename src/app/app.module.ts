import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewapisService } from './service/newapis.service';
import { TestslaComponent } from './testsla/testsla.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponent } from './domain/domain.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TestslaComponent,
    BusinessComponent,
    TechcrunchComponent,
    DomainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [NewapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
