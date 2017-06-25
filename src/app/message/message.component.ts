import {
  Component,
  OnInit
} from '@angular/core';
import {
  WebService
} from '../web.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  messages = [];

  constructor(private webService: WebService) {}

  async ngOnInit() {

     var response = await this.webService.getMessages();
     this.messages = response.json();

  }

}
