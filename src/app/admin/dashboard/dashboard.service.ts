import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories():Observable<{ok:boolean,data:Category[]}> {
    return this.httpClient.get<{ok:boolean,data:Category[]}>('/api/category');
  }

  getCategories(params:{_id:string}):Observable<{ok:boolean,data:Category[]}> {
    return this.httpClient.post<{ok:boolean,data:Category[]}>('/api/category/children',params);
  }

  addCategory(params: {name:string,parent:string}) {
    return this.httpClient.post('api/category', params);
  }
}
