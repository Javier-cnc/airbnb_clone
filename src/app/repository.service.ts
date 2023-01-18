import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private httpClient: HttpClient) {}

  public getCategories(): Observable<[any]> {
    // get request to the local data in the harddrive
    return this.httpClient.get<[any]>('assets/categories.json');
  }
}
