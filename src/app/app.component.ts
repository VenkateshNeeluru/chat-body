import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newproject';
  isshowChatWindow: boolean;

  showChatWindow(): void {
    this.isshowChatWindow = !this.isshowChatWindow;
  }

}
