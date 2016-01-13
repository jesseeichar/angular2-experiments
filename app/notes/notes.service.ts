import {Injectable, OnInit} from 'angular2/core';

export class Note {
  public text: string;
  public created: Date;
  public modified: Date;
}
@Injectable()
export class NotesService implements OnInit {
  ngOnInit() {

  }
  getNotesCount(): number {
    return notes.length;
  }

  getNotes(): Note[] {
    return notes;
  }
}

let notes: Note[] = [
  { created: new Date(2000, 1, 21, 12, 15), modified: new Date(2000, 1, 21, 12, 15), text: "First note" }
]