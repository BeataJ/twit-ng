import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = [];

  constructor(private _feedService : FeedService) { }

  ngOnInit() {
    this.friends = this._feedService.getFriends();
    console.log(this.friends);
  }

}
