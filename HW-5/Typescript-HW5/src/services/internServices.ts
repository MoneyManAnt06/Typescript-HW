import Intern from '../classes/Intern';
import { createClient } from '../client';
import { checkLength } from '../decorators/checkLength';
import { logDecorator } from '../decorators/logDecorator';
import { minLength } from '../decorators/minLengthDecorator';
import { required } from '../decorators/requiredDecorator';
import { validate } from '../decorators/validateDecorator';

export class InternServices {
  async getIntern() {
    const supabase = createClient();

    let { data: intern, error } = await supabase.from('intern').select('*');
    return intern;
  }

  @validate
  @logDecorator('created', 'Intern')
  async createIntern(
    @required
    age: number,
    @required
    name: string,
    @required
    role: string,
    @required
    resume: string,
    @required
    mentor: string
  ) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('intern')
      .insert([{ age, name, role, resume, mentor }])
      .select()
      .single();

    return data;
  }

  @validate
  @logDecorator('updated', 'Intern')
  async updateIntern(
    @required
    age: number,
    @required
    @minLength
    name: string,
    @required
    role: string,
    @required
    resume: string,
    @required
    mentor: string,
    @required
    id: number
  ) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('intern')
      .update({ age, name, role, resume, mentor, id })
      .eq('id', id)
      .select()
      .single();

    return data;
  }

  @logDecorator('deleted', 'Intern')
  async deleteIntern(id: number) {
    const supabase = createClient();

    const { error } = await supabase.from('intern').delete().eq('id', id);
    if (error) {
      throw new Error('Was not able to delete');
    }
  }
}

const updatedIntern = new InternServices();
updatedIntern.updateIntern(24, 'ot', 'developer', 'cold caller', 'Jorge', 1);
