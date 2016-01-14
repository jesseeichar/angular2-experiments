import {Component, OnInit} from 'angular2/core';
import {Note, NotesService} from './notes.service'
@Component({
  template: `
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large red" (click)="newNote()">
      <i class="large material-icons">add</i>
    </a>
  </div>
  <div class="card" *ngFor="#note of notes">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{note.name}}<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{note.name}}<i class="material-icons right">close</i></span>
      <p>{{note.text}}</p>
    </div>
  </div>
    `
})
export class NoteListComponent implements OnInit {
  public notes: Note[];
  constructor(private notesService: NotesService) { }
  ngOnInit() {
    this.notes = this.notesService.notes();
  }
  newNote() {
    this.notesService.add(new Note()); // TODO finish implementation
  }
}
