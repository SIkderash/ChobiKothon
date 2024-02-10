// src/app/photo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl1 = 'https://minnow-destined-terrier.ngrok-free.app/model1'; // Replace with your server URL
  private apiUrl2 = 'https://minnow-destined-terrier.ngrok-free.app/model2'; // Replace with your server URL
  private apiUrl3 = 'https://minnow-destined-terrier.ngrok-free.app/model3'; // Replace with your server URL
  private apiUrl4 = 'https://minnow-destined-terrier.ngrok-free.app/model4'; // Replace with your server URL
  private apiUrl5 = 'https://minnow-destined-terrier.ngrok-free.app/addCaption'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  uploadPhoto1(photo: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<{ caption: string }>(this.apiUrl1, formData);
  }

  
  uploadPhoto2(photo: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<{ caption: string }>(this.apiUrl2, formData);
  }

  
  uploadPhoto3(photo: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<{ caption: string }>(this.apiUrl3, formData);
  }

  uploadPhoto4(photo: File): Observable<{ caption: string }> {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post<{ caption: string }>(this.apiUrl4, formData);
  }

  uploadCaption(caption:any){
    var data = {
      "caption": caption
    }
    return this.http.post<any>(this.apiUrl5, data);
  }

}
