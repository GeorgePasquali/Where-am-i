import { Component, OnInit } from '@angular/core';
// import { WebService } from '../web.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages = [{text:'some text', owner:'Tim'}, {text:'some other text', owner:'Billy'}];

  constructor() { }

   ngOnInit() {
   
  }

}
