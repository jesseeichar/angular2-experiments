import {Injectable, Inject, EventEmitter} from 'angular2/core';
import {Store} from "../store/store";

export class Note {
  public id: number = -1;
  public name: string;
  public text: string;
  public created: Date;
  public modified: Date;
  public readOnly = false;
  constructor() {
    this.name = "New Note";
    this.text = "";
    this.created = new Date();
    this.modified = new Date();
  }
}
@Injectable()
export class NotesService {
  public updatedNoteEvents = new EventEmitter();
  constructor(@Inject("Store") private store:Store) {}
  private getMetadata(): NoteMetadata {
    return this.store.getJson<NoteMetadata>(Keys.NOTE_MD, {nextId:0, keys:[]});
  }
  private add(note:Note) {
    let md = this.getMetadata();
    note.id = md.nextId++;
    md.keys.push(note.id);
    this.store.setJson(Keys.NOTE_MD, md);
    this.store.setJson(Keys.ID_PREFIX+note.id, note);
  }

  save(note: Note) {
    var eventType = NoteEventType.UPDATE;
    if (note.id < 0) {
      this.add(note);
      eventType = NoteEventType.ADD;
    } else {
      this.store.setJson(Keys.ID_PREFIX+note.id, note);
    }
    this.updatedNoteEvents.emit(new NoteEvent(eventType, note));
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

  delete(note:Note) {
    if (note.id > -1) {
      let md = this.getMetadata();
      md.keys = md.keys.filter(value => value != note.id);
      this.store.setJson(Keys.NOTE_MD, md);
      this.store.removeItem(Keys.ID_PREFIX+note.id);
      this.updatedNoteEvents.emit(new NoteEvent(NoteEventType.REMOVE, note));
    }
  }

  subscribe(callback: (e:NoteEvent) => void): {unsubscribe: void} {
    return this.updatedNoteEvents.subscribe({
      next(event: NoteEvent) {
        callback(event);
      }
    });
  }
}
export enum NoteEventType{ADD, UPDATE, CLEAR, REMOVE}
export class NoteEvent {
  constructor(public type:NoteEventType, public note?: Note) {}
}
interface NoteMetadata {
  nextId:number;
  keys: number[];
}
class Keys {
  public static NOTE_MD = "noteMetadata";
  public static ID_PREFIX = "note_";
}