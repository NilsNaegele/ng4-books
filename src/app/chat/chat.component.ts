import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ChatService } from '../chat.service';
import * as firebase from 'firebase';

import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  shares: FirebaseListObservable<any[]>;
  errorMessage  = '';
  newMessage = new Message();

  constructor(private chatService: ChatService) {
    this.shares = chatService.getAllShares();
  }

  sendShare() {
    if (this.newMessage.message && this.newMessage.message.length > 10 && this.newMessage.message.length < 150) {
      this.newMessage.dateCreated = firebase.database.ServerValue.TIMESTAMP;
      this.newMessage.userId = 'anonymous';
      this.chatService.sendShare(this.newMessage).then( () => {
        this.newMessage = new Message();
        this.errorMessage = null;
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
    }
  }

}
