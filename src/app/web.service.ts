import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';


@Injectable()
export class WebService {
    
    
    constructor(private http: Http) {}

    getMessages() /*: Promise<any> */{
      return  this.http.get('http://localhost:1234/messages').toPromise();
      //return [{text:'some text', owner:'Tim'}, {text:'some other text', owner:'Billy'}];
    }
}