import {Component, OnInit, AfterViewInit, Query, QueryList, ElementRef} from 'angular2/core';
import {Note, NotesService, NoteEventType} from './notes.service'
import {NoteCardComponent} from './note-card.component';
import {Observable} from 'rxjs/Observable'

@Component({
  template: `
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large red" (click)="newNote()">
      <i class="large material-icons waves-effect waves-circle">add</i>
    </a>
  </div>
  <form>
    <div class="input-field">
      <input #searchBox id="search" type="search" required (keyup)="search(searchBox.value)">
      <label for="search"><i class="material-icons">search</i></label>
      <i class="material-icons">close</i>
    </div>
  </form>
  <ul class="collapsible popout" data-collapsible="accordion">
      <li *ngFor="#note of filteredNotes()" id="note-li-{{note.id}}" [note]="note"></li>
  </ul>
    `,
  directives: [NoteCardComponent]
})
export class NoteListComponent implements OnInit, AfterViewInit {
  public notes: Observable<Note>;
  public filter = "";
  constructor(private notesService: NotesService) { }

  ngAfterViewInit() {
    this.notesService.subscribe(event => {
      if (event.type != NoteEventType.UPDATE) {
        this.notes = this.notesService.notes();
      }
    });

    $('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }
  ngOnInit() {
    this.notes = this.notesService.notes();

  }
  newNote() {
    this.notesService.save(new Note()); // TODO finish implementation
  }
  search(filter: string) {
    this.filter = filter;
  }
  filteredNotes(): Observable<Note> {
    return this.notes.filter(n => !this.filter || n.name.indexOf(this.filter) > -1 || n.text.indexOf(this.filter) > -1)
  }
}
