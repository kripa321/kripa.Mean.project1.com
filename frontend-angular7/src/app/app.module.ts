import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppSettings} from "./shared/app-settings";
import { PostsComponent } from './posts/posts.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import { AddPostComponent } from './add-post/add-post.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [AppSettings],
  entryComponents: [AddPostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
