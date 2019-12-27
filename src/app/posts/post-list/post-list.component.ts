import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
    selector : 'app-post-list',
    templateUrl : './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
    ngOnInit(){
        this.postsService.getPosts();
        this.postsSub= this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[])=>{
            this.posts=posts;
        });
    }

    // @Input() posts : Post[] =[];
    posts : Post[] =[];
    private postsSub : Subscription;

    constructor(public postsService: PostsService){}

    onDelete(postId: string){
        this.postsService.deletePost(postId);
    }
}
    // posts=[
    //     {title: 'First post', content:'This is content 1'},
    //     {title: 'Second post', content:'This is content 2'},
    //     {title: 'Third post', content:'This is content 3'},
    //     {title: 'Fourth post', content:'This is content 4'}
    // ];
