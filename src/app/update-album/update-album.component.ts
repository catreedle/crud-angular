import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../albums.service";
import { Album } from "../album.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-album",
  templateUrl: "./update-album.component.html",
  styleUrls: ["./update-album.component.css"]
})
export class UpdateAlbumComponent implements OnInit {
  album: Album = {
    id: null,
    title: null,
    content: null
  };
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(album) {
    console.log(this.route.snapshot.params.id)
    this.albumsService.updateAlbum(this.route.snapshot.params.id, album).subscribe((album: Album) => {
      console.log("Album updated!", album);
    });
    // this.createAlbum.emit(album);
  }
}
