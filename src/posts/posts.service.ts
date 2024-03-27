// src/posts/posts.service.ts

import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    return this.posts.find(post => post.id === id);
  }

  create(post: Post): void {
    this.posts.push(post);
  }

  update(id: number, post: Post): void {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts[index] = post;
    }
  }

  delete(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
