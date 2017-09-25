import { Component, ViewEncapsulation } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  closeResult: string;
  message = '';
  isStale = false;
  feedback = { fullName: '', messageText: ''};

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content);
  }

  setMessage(text: string) {
    this.message = text;
  }

  checkStale(val: string) {
    this.isStale = val !== this.message;
  }
  sendMessage() {
    // persist data to firebase db
    // console.log(this.feedback);
    this.message = '';
    this.feedback = { fullName: '', messageText: ''};
  }

}
