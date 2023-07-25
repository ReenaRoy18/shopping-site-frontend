import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  login(params: { email: string; password: string }) {
    return this.httpClient.post('/api/admin/login', params);
  }
}
