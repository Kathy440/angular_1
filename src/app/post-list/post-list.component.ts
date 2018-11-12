import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostListService } from '../services/post-list.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postloveIts: number;
  @Input() postcreate_date: Date;

  @Input() index: number;
  @Input() id: number;
  

  posts: Post[] = [];
  postListSubcription: Subscription;

  constructor(private postListService: PostListService,
              private router: Router) { }

  ngOnInit() {
    this.postListSubcription = this.postListService.postListSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postListService.emitPostsSubject();
  }
  
  getColor() {
      if(this.postloveIts>0) {
        return 'green';
      }else if(this.postloveIts<0) {
        return 'red';
      }
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

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
  }

  loveIts() {
    this.postListService.onLoveIt(this.index);
  }

  dontloveIt() {
    this.postListService.onDontLoveIt(this.index);
  }
  
  
}
