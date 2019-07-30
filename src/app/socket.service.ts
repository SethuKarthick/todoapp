import { Injectable } from '@angular/core';

//user imports 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public baseUrl = "http://localhost:3000";
  public socket;

  constructor(private http: HttpClient) { 
    //handshake is happening
    console.log("Contructor of Socket Service")
    this.socket = io(this.baseUrl,{forceNew: true});
  }
  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verifyUser', (data) => {
        observer.next(data);
      });//On method
    });//end observable
  }//end verifyUser

  public setUser = (authToken) => {
    this.socket.emit('set-user', authToken);
  }
  public getUpdatesFromUser = (userId) => {
    return Observable.create((observer) => {
      this.socket.on(userId, (data) => {
        observer.next(data);
      }); // end Socket
    }); // end Observable
  }

  public exitSocket = () =>{
    this.socket.disconnect();
  }// end exit socket

  public disconnectedSocket = () => {

      this.socket.emit("disconnect", "");//end Socket

  }//end disconnectedSocket

  public onlineUserList = () => {
    return Observable.create((observer) => {
      this.socket.on('online-user-list', (userList) => {
        observer.next(userList);
      });//end On method
    });//end observable

  }//end onlineUserList
  
  public notifyUpdates = (data) => {
    this.socket.emit('notify-updates', data);
  }
}
