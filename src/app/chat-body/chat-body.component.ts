import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {
  messages: any[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getMessages().subscribe((res: any) => {
      console.log(res);
      this.messages = res.messages;
    }, err => {
      console.log(err);
    });
    this.httpService.addMessage.subscribe(res => {
      this.messages.push(res);
    });
  }

}
