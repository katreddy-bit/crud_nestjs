import { Controller } from '@nestjs/common';

// @Controller('posts')
// export class PostsController {}
// // src/posts/posts.controller.ts

import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';


import { Post as PostEntity} from './posts.entity';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostEntity[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): PostEntity {
    return this.postsService.findOne(+id);
  }

  @Post()
  create(@Body() post: PostEntity): void {
    this.postsService.create(post);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() post: PostEntity): void {
    this.postsService.update(+id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.postsService.delete(+id);
  }
}
