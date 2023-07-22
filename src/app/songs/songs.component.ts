import { Component, OnInit } from '@angular/core';
import { songs } from '../data/songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songs = songs;

  constructor() {}

  async ngOnInit() {}
}
