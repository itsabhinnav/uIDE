import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PalleteComponent } from './pallete/pallete.component';
import { PropsComponent } from './props/props.component';
import { CodeComponent } from './code/code.component';
import { DesignComponent } from './design/design.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    PalleteComponent,
    PropsComponent,
    CodeComponent,
    DesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
