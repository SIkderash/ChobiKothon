// src/app/photo-upload/photo-upload.component.ts

import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent {
  selectedFile: File | null = null;
  uploadedCaption: string | null = null;
  selectedFileUrl: string | ArrayBuffer | null = null;

  constructor(private photoService: PhotoService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    // Load and display the selected image
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.photoService.uploadPhoto(this.selectedFile).subscribe(
        (response: any) => {
          console.log(response);
          this.uploadedCaption = response.caption;
        },
        (error: any) => {
          console.error('Failed to upload photo:', error);
        }
      );
    }
  }
}
