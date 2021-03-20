import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  addMessage = new Subject;

  constructor(private http: HttpClient) { }

  getChannels() {
    const URL = '../assets/data/channels.json';
    return this.http.get(URL);
  }

  getProfiles() {
    const URL = '../assets/data/profiles.json';
    return this.http.get(URL);
  }

  getMessages() {
    const URL = '../assets/data/messages.json';
    return this.http.get(URL);
  }

}
