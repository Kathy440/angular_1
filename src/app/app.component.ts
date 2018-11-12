import { Component, OnInit } from '@angular/core';
import { PostListService } from './services/post-list.service';
import { Subscription, from } from 'rxjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  constructor(private postListService: PostListService,
              private router: Router) {

    var config = {
      apiKey: "AIzaSyDrSihN87COtTKt0OvJ5bB2yk52ErYVuSQ",
      authDomain: "dernier-projet-angular.firebaseapp.com",
      databaseURL: "https://dernier-projet-angular.firebaseio.com",
      projectId: "dernier-projet-angular",
      storageBucket: "dernier-projet-angular.appspot.com",
      messagingSenderId: "647273116064"
    };
    firebase.initializeApp(config);
}

onFetch() {
  this.postListService.getPostFromServer();
}



}
