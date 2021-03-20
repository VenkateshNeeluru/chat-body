import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent implements OnInit {
  inputValue: string = '';
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.inputValue.trim()) {
      this.httpService.addMessage.next({
        msg: this.inputValue,
        from: "2",
        pic: "user1.png"
      });
      console.log(this.inputValue);
      this.inputValue = '';
    }
  }
}
