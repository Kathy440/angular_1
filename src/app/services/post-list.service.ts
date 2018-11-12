import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as firebase from 'firebase'; 
import { Router } from "@angular/router";
import { Post } from "../models/Post.model";

@Injectable()
export class PostListService {

    postListSubject = new Subject<Post[]>();
   posts: Post[] = [];

      constructor(private httpClient: HttpClient, private router: Router) {}
      //méthode pour pouvoir acceder la liste des appareils
      //.slice pour émettre une copie de cette array
      emitPostsSubject() {
        this.postListSubject.next(this.posts.slice());
      }

      savePostToServer() {
          this.httpClient
          .put('https://dernier-projet-angular.firebaseio.com/posts.json', this.posts)
          .subscribe(
              () => {
                  console.log('Enregistrement terminé ! ');
              },
              (error) => {
                  console.log('Erreur de sauvegarde ! ' + error);
              }
          )
      }

  getPostFromServer() {
    this.httpClient
      .get<Post[]>('https://dernier-projet-angular.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        },
        () => {
          console.log('Récupération Ok ');
        }
      );
} 


addPost(title: string, content: string) {
    const postObeject = {
      title: '',
      content: '',
      loveIts: 0,
      postcreate_date: new Date()
    };
    postObeject.title = title;
    postObeject.content = content;
    postObeject.loveIts = 0;
    postObeject.postcreate_date = new Date();
    this.posts.push(postObeject);
    this.emitPostsSubject();
  }


  deletePost(posts) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === posts) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePostToServer();
    this.emitPostsSubject();

  }


  onLoveIt(i: number) {
    this.posts[i].loveIts++ ;
    this.emitPostsSubject();
    return this.posts[i].loveIts;
    
    
  }

  onDontLoveIt(i: number) {
    this.posts[i].loveIts --;
    this.emitPostsSubject();
    return this.posts[i].loveIts;
  }


  

}