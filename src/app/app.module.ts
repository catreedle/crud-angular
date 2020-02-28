import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAlbumComponent } from './new-album/new-album.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    NewAlbumComponent,
    AppHeaderComponent,
    UpdateAlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: AlbumsComponent},
        { path: 'add', component: NewAlbumComponent},
        { path: 'update/:id', component: UpdateAlbumComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
