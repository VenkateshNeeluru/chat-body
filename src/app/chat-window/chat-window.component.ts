import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  isshowChatWindow: boolean;

  userlist = [
    {
      img: 'user1.png'
    },
    {
      img: 'user2.png'
    },
    {
      img: 'user3.png'
    },
    {
      img: 'user1.png'
    },
    {
      img: 'user2.png'
    },
    {
      img: 'user3.png'
    },
    {
      img: 'user1.png'
    },
    {
      img: 'user2.png'
    },
    {
      img: 'user3.png'
    },
    {
      img: 'user1.png'
    },
    {
      img: 'user2.png'
    },
    {
      img: 'user3.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showChatWindow(): void {
    this.isshowChatWindow = !this.isshowChatWindow;
  }

  closeButton(): void {
    this.isshowChatWindow = false;
  }

}
