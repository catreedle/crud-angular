import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Album } from './album.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiUrl:string = 'http://reduxblog.herokuapp.com/api/posts?key=albums'
  apiUrl2:string = 'http://reduxblog.herokuapp.com/api/posts'
  constructor(
    private http: HttpClient,
  ) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(retry(3), catchError(this.handleError));
  }

  createAlbum(album: Album):Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album, httpOptions)
  }

  updateAlbum(id, album: Album) {
    return this.http.put<Album>(`${this.apiUrl2}/${id=id}`, album)
  }

  deleteAlbum(id: number) {
    return this.http.delete<Album>(`${this.apiUrl2}/${id}`)
  }

}
