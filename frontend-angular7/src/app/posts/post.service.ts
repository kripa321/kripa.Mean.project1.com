import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of as observableOf} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpClient} from "@angular/common/http";
import {AppSettings} from '../shared/app-settings';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(public http: HttpClient, public appSettings: AppSettings) {
  }
  /**
   *get All postData
   * @returns {Observable<any>}
   */
  getPosts(): Observable<any> {
    return this.http.get(this.appSettings.API_ENDPOINT + 'posts')
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  /**
   *add post in post list
   * @returns {Observable<any>}
   */
  addNewPost(data): Observable<any> {
    return this.http.post(this.appSettings.API_ENDPOINT + 'posts', data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  upVotePost(postId): Observable<any> {
    return this.http.put(this.appSettings.API_ENDPOINT + 'upVote', postId)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }
}
