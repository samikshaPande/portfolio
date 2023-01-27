import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  test = "HELLO?";
  constructor(private http: HttpClient) {}

  get(url:string) {
    return this.http.get(url);
  }

  post(url: string, {}) {
    return this.http.post(url, { name: "" });
  }

  sendEmail(url:any, data:{}) {
    return this.http.post(url, data);
  }
}