import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  isshowChatWindow: boolean;
  activeTabId = 2;

  webUserList = [
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

  userList = [
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

  msgnrUserList = [
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

  changeTab(id) {
    this.activeTabId = id;
    if (window.innerWidth < 500) {
      const scrollEle = document.querySelector('.hdr_section');
      if (id === 1) {
        scrollEle.scrollLeft = 0;
      } else if (id === 2) {
        scrollEle.scrollLeft = scrollEle.scrollWidth;
      } else if (id === 3) {
        scrollEle.scrollLeft = scrollEle.scrollWidth;
      }
    }
  }

}
