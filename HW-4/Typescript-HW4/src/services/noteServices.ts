import Note from '../classes/Note';
import { createClient } from '../client';
import { logDecorator } from '../decorators/logDecorator';
import { minLength } from '../decorators/minLengthDecorator';
import { required } from '../decorators/requiredDecorator';
import { validate } from '../decorators/validateDecorator';

export default class NoteServices {
  async getNote(): Promise<Note[]> {
    const supabase = createClient();

    const { data: Note, error } = await supabase.from('Note').select();

    if (error) {
      throw new Error(error.message);
    }
    return Note;
  }

  @validate
  @logDecorator()
  async createNote(
    @required
    @minLength
    title: string,
    description: string,
    user_id: number
  ): Promise<Note> {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('Note')
      .insert([{ title, description, user_id }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async updateNote(
    title: string,
    description: string,
    user_id: number,
    id: number
  ): Promise<Note> {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('User')
      .update({ title, description, user_id })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async deleteNote(id: number): Promise<string> {
    const supabase = createClient();

    const { error } = await supabase.from('Note').delete().eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
    return 'The note was deleted!!!';
  }
}

const noteServices = new NoteServices();
noteServices.createNote('note 1', 'EWdfdsafsdf', 1);
