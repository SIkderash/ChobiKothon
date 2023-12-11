// src/app/photo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://minnow-destined-terrier.ngrok-free.app/upload'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  uploadPhoto(photo: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<{ caption: string }>(this.apiUrl, formData);
  }
}
