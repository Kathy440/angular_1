import { Component, OnInit } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {


  posts: Post[];
  postListSubcription: Subscription;
  constructor(private postListService: PostListService,
              private router: Router) { }

  ngOnInit() {
    this.postListSubcription = this.postListService.postListSubject.subscribe(
    (posts: Post[]) => {
      this.posts = posts;
    }
  );
  this.postListService.emitPostsSubject();
  }


  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }


  onDeletePost(posts) {
    this.postListService.deletePost(posts);
  }

  onSave() {
    this.postListService.savePostToServer();
  }
  
  onFetch() {
    this.postListService.getPostFromServer();
    //console.log(this.postListService.getPostFromServer());
  }
}
