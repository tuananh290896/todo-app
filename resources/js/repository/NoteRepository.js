import BaseRepository from './BaseRepository';
import { 
  BASE_URL,
  CREATE_NOTE_URL,
  LIST_NOTE_URL,
  DELETE_NOTE_URL
} from '@constants/config';

class NoteRepository extends BaseRepository{
  constructor(){
    super(BASE_URL);
  }

  getList = (params = {}) => {
    return this.get(LIST_NOTE_URL, params);
  }

  create = (payload) => {
    return this.post(CREATE_NOTE_URL, payload);
  }

  deleteNote = (id) => {
    return this.delete(DELETE_NOTE_URL(id));
  }
}

export default NoteRepository;