import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../albums.service";
import { Album } from '../album.model';

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums = [];
  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data: any[]) => {
      console.log(data);
      this.albums = data;
    })
  }

  deleteAlbum(id:number) {
    this.albumsService.deleteAlbum(id).subscribe((album: Album)=>{
      console.log("Album deleted", album)
    })
  }
}
