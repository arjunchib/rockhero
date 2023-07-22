import { Component, OnInit } from '@angular/core';
import { songs } from './data/songs';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rockhero';
  songs = songs;
  songVectors = songs.map((song) =>
    Object.values(song).join(' ').toLowerCase()
  );
  search = new FormControl('');

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      value ? this.filterSongs(value) : (this.songs = songs);
    });
  }

  private filterSongs(value: string) {
    this.songs = songs.filter((song, i) =>
      this.songVectors[i].includes(value.toLowerCase())
    );
  }
}
