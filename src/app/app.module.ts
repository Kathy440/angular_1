import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PostListService } from './services/post-list.service';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';

const appRoutes: Routes = [
  { path: 'posts', component: ListViewComponent },
  { path: 'posts/new', component: NewPostComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    HeaderComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
