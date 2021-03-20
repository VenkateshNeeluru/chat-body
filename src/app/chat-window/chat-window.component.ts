import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Output() closeChat = new EventEmitter;
  activeTabId: string = 'WhatsApp';

  webUserList = [];

  userList = [];

  msgnrUserList = [];

  channelsList: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getChannels().subscribe((res: any) => {
      console.log(res);
      this.channelsList = res.channels;
    }, err => {
      console.log(err);
    });
    this.httpService.getProfiles().subscribe((res: any) => {
      this.webUserList = res.website;
      this.userList = res.whatsApp;
      this.msgnrUserList = res.messenger;
    }, err => {
      console.log(err);
    });
  }

  closeButton(): void {
    this.closeChat.emit(true);
  }

  changeTab(id) {
    this.activeTabId = id;
    // if (window.innerWidth < 500) {
    //   const scrollEle = document.querySelector('.hdr_section');
    //   if (id === 1) {
    //     scrollEle.scrollLeft = 0;
    //   } else if (id === 2) {
    //     scrollEle.scrollLeft = scrollEle.scrollWidth;
    //   } else if (id === 3) {
    //     scrollEle.scrollLeft = scrollEle.scrollWidth;
    //   }
    // }
  }

}
