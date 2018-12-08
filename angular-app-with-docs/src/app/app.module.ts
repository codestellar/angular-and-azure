import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathOperationsComponent } from './math-operations/math-operations.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    AppComponent,
    MathOperationsComponent,
    PostsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
