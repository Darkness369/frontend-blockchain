import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthMessageService {

  private URL = 'https://seguridad-blockchain.herokuapp.com/api';
  
  selectDatos: any;
  Datos: any[];

  constructor(private http: HttpClient) { }

  infoPost(message:any){
    return this.http.post<any>(this.URL + '/add', message);
  }

  getInfo(){
    return this.http.get<any>(this.URL);
  }

}
