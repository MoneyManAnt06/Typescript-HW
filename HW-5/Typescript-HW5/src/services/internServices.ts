import Intern from '../classes/Intern';
import { createClient } from '../client';
import { logDecorator } from '../decorators/logDecorator';

export class InternServices {
  async getIntern() {
    const supabase = createClient();

    let { data: intern, error } = await supabase.from('intern').select('*');
    return intern;
  }

  async createIntern(intern: Intern) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('intern')
      .insert([{ ...intern }])
      .select()
      .single();

    return data;
  }

  @logDecorator('updated', 'Intern')
  async updateIntern(intern: Intern, id: number) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('intern')
      .update({ ...intern })
      .eq('id', id)
      .select()
      .single();

    return data;
  }

  async deleteIntern(id: number) {
    const supabase = createClient();

    const { error } = await supabase.from('intern').delete().eq('id', id);
    if (error) {
      throw new Error('Was not able to delete');
    }
  }
}

const updatedIntern = new InternServices();
updatedIntern.updateIntern(
  {
    age: 23,
    mentor: 'trapito',
    name: 'anthony',
    resume: 'dfsfaf',
    role: 'junior',
  },
  1
);
