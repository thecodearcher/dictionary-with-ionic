import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { RESULT } from "../../model/result/result.interface";

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  base_url:string = "https://od-api.oxforddictionaries.com/api/v1";
  proxy ='https://cors-anywhere.herokuapp.com/';
  result:RESULT;
  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }
  
  async search(entry){
    let header: Headers = new Headers({
      "Access-Control-Allow-origin":"*",
      "Accept": "application/json",
      "app_id": "bb6d6ecb",
      "app_key": "b9160cf1d87cd9c2ae2203328056d539" });
    header.append("Access-Control-Allow-origin","*");
    return  this.http.get(this.proxy+`https://od-api.oxforddictionaries.com/api/v1/entries/en/${entry}/definitions%3Bexamples`,{headers:header})
    .toPromise().then(data=>{
      console.log(data.json());
      return data.json();
      });
    
  }
}


