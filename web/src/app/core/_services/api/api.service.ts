import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

const API_URL = environment.api.url;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  public post(url: string, body: {}) {
    return this._http.post(`${API_URL}${url}`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
