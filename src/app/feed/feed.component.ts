import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FeedService } from '../feed.service';
import { Tweet } from '../tweet';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  
})
export class FeedComponent implements OnInit {

  tweets = [];

  tweetText='';

  constructor(private _userService : UserService, private _feedService : FeedService) { }

  ngOnInit() {
    this.tweets = this._feedService.getCurrentFeed();
  }
   
   
  
 
  OnFavorite(tweet){
    this._feedService.favoriteTweet(tweet);
  }

  OnRetweet(tweet){
    this._feedService.reTweet(tweet);
  }

  

  OnNewTweet(){
    console.log(this.tweetText);
    this._feedService.postNewTweet(this.tweetText);
    this.tweetText = '';
  }

}
