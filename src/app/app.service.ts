import { Injectable } from '@angular/core';

//user imports 

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public baseUrl = "http://localhost:3000/api/v1";


  constructor(private _http: HttpClient) { }

  public signUp(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)
      .set('userName', data.userName)
      .set('countryName', data.countryName)
      .set('isAdmin', data.isAdmin);

    return this._http.post(`${this.baseUrl}/users/signup`, params);
  }//end signUp 

  public signIn(data): Observable<any> {
    const params = new HttpParams()

      .set('email', data.email)
      .set('passwrod', data.password)
    return this._http.post(`${this.baseUrl}/users/login`, params);
  }//end signIn

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }//end of setlocalstorage Function

  public getUserInfoFromLocalStorage: any = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }//end getlocalstorage function


  public getCountryNames(): Observable<any> {

    return this._http.get("./../assets/countryNames.json");

  }//end getCountryNames


  public getCountryNumbers(): Observable<any> {

    return this._http.get("./../assets/countryPhoneCodes.json");

  }//end getCountryNumbers

  public resetPassword(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
    return this._http.post(`${this.baseUrl}/users/resetPassword`, params);

  } // reset password ends here

  public updatePassword(data): Observable<any> {
    const params = new HttpParams()
      .set('validationToken', data.validationToken)
      .set('password', data.password)
    return this._http.put(`${this.baseUrl}/users/updatePassword`, params);
  } // end updatePassword

  public getAllList(userId, authToken): Observable<any> {

    return this._http.get(`${this.baseUrl}/lists/view/all/lists/${userId}?authToken=${authToken}`);
  }//end getAllList function

  public logout(userId, authToken): Observable<any> {

    const params = new HttpParams()
      .set('authToken', authToken)

    return this._http.post(`${this.baseUrl}/users/${userId}/logout`, params);
  }//end deleteMeeting

  public getListDetails(listId, authToken): Observable<any> {

    return this._http.get(`${this.baseUrl}/lists/${listId}/details?authToken=${authToken}`);
  }//end getListDetails function

  public addList(data): Observable<any> {

    const params = new HttpParams()
      .set('listName', data.listName)
      .set('listCreatorId', data.listCreatorId)
      .set('listCreatorName', data.listCreatorName)
      .set('listModifierId', data.listModifierId)
      .set('listModifierName', data.listModifierName)
      .set('listMode', data.listMode)
      .set('authToken', data.authToken)

    return this._http.post(`${this.baseUrl}/lists/addList`, params);
  }//end addList 

  public updateList(data): Observable<any> {

    const params = new HttpParams()
      //.set('listId', data.listId)
      .set('listName', data.listName)
      .set('listModifierId', data.listModifierId)
      .set('listModifierName', data.listModifierName)
      .set('listMode', data.listMode)
      .set('authToken', data.authToken)

    return this._http.put(`${this.baseUrl}/lists/${data.listId}/updateList`, params);
  }//end updateList 

  public deleteList(data): Observable<any> {

    const params = new HttpParams()
      //.set('listId', data.listId)
      .set('authToken', data.authToken)

    return this._http.post(`${this.baseUrl}/lists/${data.listId}/delete`, params);
  }//end deleteList 

  public getItemDetails(itemId, authToken): Observable<any> {

    return this._http.get(`${this.baseUrl}/items/${itemId}/details?authToken=${authToken}`);
  }//end getItemDetails function

  public getAllItems(listId, authToken): Observable<any> {

    return this._http.get(`${this.baseUrl}/items/view/all/items/${listId}?authToken=${authToken}`);
  }//end getAllItems function

  public addItem(data): Observable<any> {

    const params = new HttpParams()
      .set('listId', data.listId)
      .set('itemName', data.itemName)
      .set('itemCreatorId', data.itemCreatorId)
      .set('itemCreatorName', data.itemCreatorName)
      .set('itemModifierId', data.itemModifierId)
      .set('itemModifierName', data.itemModifierName)
      .set('authToken', data.authToken)

    return this._http.post(`${this.baseUrl}/items/addItem`, params);
  }//end addItem 

  public updateItem(data): Observable<any> {
    const params = new HttpParams()
      //.set('itemId', data.itemId)
      .set('itemName', data.itemName)
      .set('itemModifierId', data.itemModifierId)
      .set('itemModifierName', data.itemModifierName)
      .set('itemDone', data.itemDone)
      .set('authToken', data.authToken)

    return this._http.put(`${this.baseUrl}/items/${data.itemId}/updateitem`, params);
  }//end updateItem 


  public addSubItem(data): Observable<any> {
    console.log(data)
    const params = new HttpParams()
      //.set('itemId', data.itemId)
      .set('subItemId', data.subItemId)
      .set('subItemName', data.subItemName)
      .set('subItemCreatorId', data.subItemCreatorId)
      .set('subItemCreatorName', data.subItemCreatorName)
      .set('subItemModifierId', data.subItemModifierId)
      .set('subItemModifierName', data.subItemModifierName)
      .set('authToken', data.authToken)

    return this._http.put(`${this.baseUrl}/items/${data.itemId}/addSubItem`, params);
  }//end addSubItem 

  public deleteItem(data): Observable<any> {

    const params = new HttpParams()
      //.set('itemId',data.itemId)
      .set('authToken', data.authToken)


    return this._http.post(`${this.baseUrl}/items/${data.itemId}/delete`, params);
  }//end deleteItem

  public deleteSubItem(data): Observable<any> {

    const params = new HttpParams()
      .set('subItemId', data.subItemId)
      .set('authToken', data.authToken)

    return this._http.put(`${this.baseUrl}/items/${data.itemId}/deleteSubItem`, params);
  }//end deleteSubItem 

  public getHistory(data): Observable<any> {

    const params = new HttpParams()
      .set('listId', data.listId)
      .set('authToken', data.authToken)

    return this._http.post(`${this.baseUrl}/history/deleteHistory`, params);
  }//end addItem

  public addHistory(data): Observable<any> {

    const params = new HttpParams()
      .set('listId', data.listId)
      .set('key', data.key)
      .set('itemId', data.itemId)
      .set('subItemId', data.subItemId)
      .set('authToken', data.authToken)

    return this._http.post(`${this.baseUrl}/history/addHistory`, params);
  }//end addItem 

  public updateSubItem(data): Observable<any> {

    const params = new HttpParams()
      //.set('itemId', data.itemId)
      .set('subItemId', data.subItemId)
      .set('subItemName', data.subItemName)
      .set('subItemModifierId', data.subItemModifierId)
      .set('subItemModifierName', data.subItemModifierName)
      .set('subItemDone', data.subItemDone)
      .set('authToken', data.authToken)

    return this._http.put(`${this.baseUrl}/items/${data.itemId}/updateSubItem`, params);
  }//end updateSubItem 

  public getSubItemDetails(data): Observable<any> {
    const params = new HttpParams()
      .set('subItemId', data.subItemId)
    return this._http.post(`${this.baseUrl}/items/subItems/${data.itemId}/details?authToken=${data.authToken}`, params);
  }//end getSubItemDetails function

  public getAllUsers(authToken): Observable<any> {    
    return this._http.get(`${this.baseUrl}/users/view/all?authToken=${authToken}`);
  }//end getAllUsers function

  public getUserDetails(userId,authToken): Observable<any> {    
    return this._http.get(`${this.baseUrl}/users/${userId}/details?authToken=${authToken}`);
  }//end getUserDetails function

  public unfriendUser(data): Observable<any>{

    const params = new HttpParams()
      .set('senderId',data.senderId)
      .set('senderName',data.senderName)
      .set('recieverId',data.recieverId)
      .set('recieverName',data.recieverName)
      .set('authToken',data.authToken)
      

    return this._http.post(`${this.baseUrl}/friends/unfriend/user`, params);
  }//end sendFriendRequest

  public acceptFriendRequest(data): Observable<any>{

    const params = new HttpParams()
      .set('senderId',data.senderId)
      .set('senderName',data.senderName)
      .set('recieverId',data.recieverId)
      .set('recieverName',data.recieverName)
      .set('authToken',data.authToken)
      

    return this._http.post(`${this.baseUrl}/friends/accept/friend/request`, params);
  }//end sendFriendRequest

  public cancelFriendRequest(data): Observable<any>{

    const params = new HttpParams()
      .set('senderId',data.senderId)
      .set('senderName',data.senderName)
      .set('recieverId',data.recieverId)
      .set('recieverName',data.recieverName)
      .set('authToken',data.authToken)
      

    return this._http.post(`${this.baseUrl}/friends/cancel/friend/request`, params);
  }//end sendFriendRequest

  public rejectFriendRequest(data): Observable<any>{

    const params = new HttpParams()
      .set('senderId',data.senderId)
      .set('senderName',data.senderName)
      .set('recieverId',data.recieverId)
      .set('recieverName',data.recieverName)
      .set('authToken',data.authToken)
      

    return this._http.post(`${this.baseUrl}/friends/reject/friend/request`, params);
  }//end reject Friendrequest

  public sendFriendRequest(data): Observable<any>{

    const params = new HttpParams()
      .set('senderId',data.senderId)
      .set('senderName',data.senderName)
      .set('recieverId',data.recieverId)
      .set('recieverName',data.recieverName)
      .set('authToken',data.authToken)
      

    return this._http.post(`${this.baseUrl}/friends/send/friend/request`, params);
  }//end sendFriendRequest

  public getAllSharedList(userId,authToken): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId)
    
    return this._http.post(`${this.baseUrl}/lists/view/all/shared/lists?authToken=${authToken}`,params);
  }//end getAllSharedList function


}
