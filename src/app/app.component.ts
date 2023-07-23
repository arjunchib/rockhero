import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { songs } from './data/songs';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

type Song = (typeof songs)[number];

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

  @ViewChild('searchEl') searchInput?: ElementRef<HTMLInputElement>;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'k' && event.metaKey) {
      this.searchInput?.nativeElement.focus();
    }
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      value ? this.filterSongs(value) : (this.songs = songs);
    });
  }

  get isMobile() {
    return document.body.clientWidth < 600;
  }

  get isDesktop() {
    return !this.isMobile;
  }

  dots(song: Song) {
    return new Array(song.num_players).fill('⦿').join('');
  }

  private filterSongs(value: string) {
    this.songs = songs.filter((song, i) =>
      this.songVectors[i].includes(value.toLowerCase())
    );
  }
}
