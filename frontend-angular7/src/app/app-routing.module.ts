import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', redirectTo: 'post', pathMatch: 'full'},
  {path: 'post', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
