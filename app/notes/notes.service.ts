import {Injectable, Inject} from 'angular2/core';
import {Store} from "../store/store";

export class Note {
  public id: number = -1;
  public name: string;
  public text: string;
  public created: Date;
  public modified: Date;
  constructor() {
    this.name = "New Note";
    this.text = "";
    this.created = new Date();
    this.modified = new Date();
  }
}
@Injectable()
export class NotesService {
  constructor(@Inject("Store") private store:Store) {}
  getMetadata(): NoteMetadata {
    return this.store.getJson<NoteMetadata>(Keys.NOTE_MD, {nextId:0, keys:[]});
  }
  add(note:Note) {
    let md = this.getMetadata();
    note.id = md.nextId++;
    md.keys.push(note.id);
    this.store.setJson(Keys.NOTE_MD, md);
    this.store.setJson(Keys.ID_PREFIX+note.id, note);
  }
  count(): number {
    return this.getMetadata().keys.length;
  }

  notes(): Note[] {
    let notes:Note[] = [];
    let md = this.getMetadata();
    for (var i=0; i < md.keys.length; i++) {
      notes.push(this.store.getJson(Keys.ID_PREFIX + md.keys[i], new Note()));
    }
    return notes;
  }
}
interface NoteMetadata {
  nextId:number;
  keys: number[];
}
class Keys {
  public static NOTE_MD = "noteMetadata";
  public static ID_PREFIX = "note_";
}
let testNotes: Note[] = [
  {
    id: 1, created: new Date(2000, 1, 21, 12, 15), modified: new Date(2000, 1, 21, 12, 15),
    name: "First Note", text: "First note Text"
  }
]