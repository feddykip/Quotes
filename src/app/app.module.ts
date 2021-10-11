import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormsComponent } from './quote-forms/quote-forms.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ShowDatePipe } from './show-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QuotesComponent,
    QuoteFormsComponent,
    QuoteDetailsComponent,
    ShowDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
