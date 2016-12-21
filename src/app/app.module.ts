import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { FeedService } from './feed.service';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    FriendsComponent,
    MessagesComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [UserService, FeedService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
