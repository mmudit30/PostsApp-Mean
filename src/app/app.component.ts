import { Component } from '@angular/core';
import { Post } from './posts/posts.model';
import { PostsService } from './posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  // storedPosts : Post[] =[];

  // onPostAdded(post){
  //   this.storedPosts.push(post);
  // }
  // constructor(public postsService: PostsService){
    
  // }

}
