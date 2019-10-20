import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexerService } from './services/indexer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlocksComponent,
    BlockComponent,
    TransactionsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    IndexerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
