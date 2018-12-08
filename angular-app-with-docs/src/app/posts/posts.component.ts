import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(public postsService: PostsService) { }
  posts:{};

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
