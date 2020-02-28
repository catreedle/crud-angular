import { Component, OnInit  } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  album: Album = {
    id: null,
    title: null,
    content: null
  }
   constructor(private albumsService:AlbumsService) { }

  ngOnInit(): void {
  }

  onSubmit(album) {
    this.albumsService.createAlbum(album).subscribe((album: Album)=> {
      console.log("Album created!", album)
    })
    // this.createAlbum.emit(album);
  }

}
