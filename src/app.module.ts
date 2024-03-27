import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})

// src/app.module.ts



@Module({
  imports: [PostsModule],
})

export class AppModule {}
