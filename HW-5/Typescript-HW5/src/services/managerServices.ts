import Manager from '../classes/Manager';
import { createClient } from '../client';

export class managerServices {
  async getManager() {
    const supabase = createClient();

    let { data: managers, error } = await supabase.from('managers').select('*');
    return managers;
  }

  async createManager(manager: Manager) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('managers')
      .insert([{ ...manager }])
      .select()
      .single();

    return data;
  }

  async updateIntern(manager: Manager, id: number) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('managers')
      .update({ ...manager })
      .eq('id', id)
      .select()
      .single();

    return data;
  }

  async deleteManager(id: number) {
    const supabase = createClient();

    const { error } = await supabase.from('managers').delete().eq('id', id);
    if (error) {
      throw new Error('Was not able to delete');
    }
  }
}
