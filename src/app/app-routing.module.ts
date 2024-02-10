import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PhotoUploadComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
