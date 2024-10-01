import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EonetService {
  private apiUrl: string = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';

  constructor(private http: HttpClient) {}

  getEonetEvents(): Observable<any> {
    return this.http.get(this.apiUrl); // Corrigido para retornar o Observable
  }
}
