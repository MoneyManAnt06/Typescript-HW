import Note from '../classes/Note';
import { createClient } from '../client';

export default class noteServices {
  async getNote(): Promise<Note[]> {
    const supabase = createClient();

    const { data: Note, error } = await supabase.from('Note').select();

    if (error) {
      throw new Error(error.message);
    }
    return Note;
  }

  async createNote(
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
