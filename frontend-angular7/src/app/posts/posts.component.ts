import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import {DialogsService} from "../dialog-service/dialogs.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts =[];
  constructor(public postService: PostService , public dialogsService: DialogsService) {
    this.getPosts();
  }

  ngOnInit() {

  }

  getPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    }, err => {
      console.log('err', err);
    });
  }

  addPostModel(){
    this.dialogsService.addPost('addDoctor').subscribe(res => {
      if (res) {
        this.postService.addNewPost(res).subscribe((post) => {
          this.posts.push(post);
        }, err => {
          console.log('err', err);
        });
      }
    });
  }

  upVote(id, index){
    const postId = {
      _id : id
    };
    this.postService.upVotePost(postId).subscribe((res) => {
      if(res){
        if(this.posts[index]['upVote']){
          this.posts[index]['upVote'] += 1;
        }else{
          this.posts[index]['upVote'] = 1;
        }
      }

    }, err => {
      console.log('err', err);
    });
  }

}
