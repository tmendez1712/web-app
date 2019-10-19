import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,URLSearchParams, Headers, Response,RequestOptions, ResponseContentType  } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UtildataService } from '../servicios/utildata.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceutilService {

  public api =  "http://192.168.1.6:8381/"
  constructor(

    private http: Http,
    public httpcli: HttpClient,
    private util: UtildataService
  )
  { }
  public sendDataCore(metodo,params):Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({
      headers: headers ,
      params:params
    });
    return this.http.get(this.api+metodo,options);
  }

  public consumirWS(metodo,params,callback){
    this.util.showLoader();
    this.sendDataCore(metodo,params).subscribe(
      datos =>{
        this.util.hideLoader();
        callback(datos.json());
      },
      error => {
        this.util.hideLoader();
        console.log(error.status)
        if(error.status==401){
          sessionStorage.removeItem('nombre');
          window.location.reload();
        }else{
          callback(null)
        }
      })
  }
}
