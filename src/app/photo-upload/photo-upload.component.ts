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
  uploadedCaption1: string | null = null;
  uploadedCaption2: string | null = null;
  uploadedCaption3: string | null = null;
  uploadedCaption4: string | null = null;
  generating: boolean | null = null;
  selectedFileUrl: string | ArrayBuffer | null = null;
  caption: string | null = null;
  cnt: number = 0;
  constructor(private photoService: PhotoService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    this.uploadedCaption1 = null;
    this.uploadedCaption2 = null;
    this.uploadedCaption3 = null;
    this.uploadedCaption4 = null;

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
    
    this.generating = true;
    this.cnt = 0;
    if (this.selectedFile) {
      this.photoService.uploadPhoto4(this.selectedFile).subscribe(
        (response: any) => {
          console.log(response);
          this.uploadedCaption4 = response.caption;
          this.cnt++;
        },
        (error: any) => {
          console.error('Failed to upload photo:', error);
        }
      );
      this.photoService.uploadPhoto1(this.selectedFile).subscribe(
        (response: any) => {
          console.log(response);
          this.uploadedCaption1 = response.caption;
          this.cnt++;
        },
        (error: any) => {
          console.error('Failed to upload photo:', error);
        }
      );
      
      this.photoService.uploadPhoto2(this.selectedFile).subscribe(
        (response: any) => {
          console.log(response);
          this.uploadedCaption2 = response.caption;
          this.cnt++;
        },
        (error: any) => {
          console.error('Failed to upload photo:', error);
        }
      );
      this.photoService.uploadPhoto3(this.selectedFile).subscribe(
        (response: any) => {
          console.log(response);
          this.uploadedCaption3 = response.caption;
          this.cnt++;
        },
        (error: any) => {
          console.error('Failed to upload photo:', error);
        }
      );
    }

  }

  addCaption(): void {
    this.photoService.uploadCaption(this.caption);
  }

}
