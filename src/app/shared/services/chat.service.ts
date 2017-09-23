import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChatService {

  constructor(private db: AngularFireDatabase) { }

  getAllShares() {
    return this.db.list('/shares');
  }

  sendShare(message) {
    return this.db.list('/shares').push(message);
  }

}
