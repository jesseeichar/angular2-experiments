import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {NotesService, Note} from './notes.service';
import {NoteListComponent} from './note-list.component';

@Component({
  template: `
    <h2>Notes</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [NotesService]
})
@RouteConfig([
  { path: '/', name: 'NoteList', component: NoteListComponent, useAsDefault: true }
])
export class NotesAppComponent implements OnInit {
  public notes: Note[];
  constructor(public notesService: NotesService) { }
  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }
}