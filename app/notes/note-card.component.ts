import {Component, Input} from 'angular2/core';
import {Note, NotesService} from './notes.service'
import {Materialize} from '../../definitions/Materialize'
@Component({
  selector: 'li',
  template: `
    <div class="row collapsible-header">
      <input id="note-note.id-name-input"
          class="col s11 material-input"
          [(ngModel)]="note.name"
          [disabled]="note.readOnly"
          (blur)="saveNote()" />
      <div class="switch">
          <label class="col s1">
            Read Only
            <input type="checkbox" [checked]="note.readOnly" (change)="toggleReadOnly()">
            <span class="lever"></span>
          </label>
      </div>
    </div>
    <div class="collapsible-body">
      <textarea
          [disabled]="note.readOnly"
          class="materialize-textarea"
          [(ngModel)]="note.text"
          (blur)="saveNote()" ></textarea>
          <a class="btn" (click)="delete()">Delete</a>
    </div>
    `
})
export class NoteCardComponent {
  @Input() public note: Note;
  constructor(private notesService: NotesService) {}
  saveNote() {
    this.notesService.save(this.note);
  }
  toggleReadOnly() {
    this.note.readOnly = !this.note.readOnly;
    this.saveNote();
  }
  delete() {
    Materialize.fadeInImage('#note-li-' + this.note.id)
    this.notesService.delete(this.note);
  }
}

