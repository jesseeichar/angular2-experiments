import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {Note, NotesService, NoteEventType} from './notes.service'
import {NoteCardComponent} from './note-card.component';

@Component({
  template: `
  <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large red" (click)="newNote()">
      <i class="large material-icons waves-effect waves-circle">add</i>
    </a>
  </div>

  <ul class="collapsible popout" data-collapsible="accordion">
      <li *ngFor="#note of notes" id="note-li-{{note.id}}" [note]="note"></li>
  </ul>
    `,
    directives: [NoteCardComponent]
})
export class NoteListComponent implements OnInit, AfterViewInit {
  public notes: Note[];
  constructor(private notesService: NotesService) { }
  ngAfterViewInit () {
    this.notesService.subscribe(event => {
      if (event.type != NoteEventType.UPDATE) {
        this.notes = this.notesService.notes();
      }
    });

    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  ngOnInit() {
    this.notes = this.notesService.notes();

  }
  newNote() {
    this.notesService.save(new Note()); // TODO finish implementation
  }
}
