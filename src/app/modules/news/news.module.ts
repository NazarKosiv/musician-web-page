import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { PostComponent } from './components/post/post.component';
import { PostHeaderComponent } from './components/post/components/post-header/post-header.component';
import { InstagramPostComponent } from './components/post/components/instagram-post/instagram-post.component';
import { YoutubePostComponent } from './components/post/components/youtube-post/youtube-post.component';
import { FacebookPostComponent } from './components/post/components/facebook-post/facebook-post.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, PostComponent, PostHeaderComponent, InstagramPostComponent, YoutubePostComponent, FacebookPostComponent]
})
export class NewsModule { }
