import { Component, OnInit, Input } from '@angular/core';
import { resolve } from 'url';

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

  

  constructor() { }

  ngOnInit() {
  }

  getColor() {
      if(this.postloveIts>0) {
        return 'green';
      }else if(this.postloveIts<0) {
        return 'red';
      }
  }

  loveIt() {
    this.postloveIts++;
  }

  dontloveIt() {
    this.postloveIts--;
  }


  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
