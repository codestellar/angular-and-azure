import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathOperationsComponent } from './math-operations/math-operations.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'math', component: MathOperationsComponent    
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path:'', component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
