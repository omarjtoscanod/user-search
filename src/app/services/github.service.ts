import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUsersByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/search/users?q=${name}`);
  }

  getUserDetails(username: string): Promise<any> {
    return this.http.get<any>(`${this.BASE_URL}/users/${username}`).toPromise();
  }
}

