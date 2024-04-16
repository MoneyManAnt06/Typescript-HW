import Manager from '../classes/Manager';
import { createClient } from '../client';
import { logDecorator } from '../decorators/logDecorator';
import { minLength } from '../decorators/minLengthDecorator';
import { required } from '../decorators/requiredDecorator';

export class ManagerServices {
  async getManager() {
    const supabase = createClient();

    let { data: managers, error } = await supabase.from('managers').select('*');
    return managers;
  }

  @logDecorator('created', 'Manager')
  async createManager(
    @required
    age: number,
    @required
    @minLength
    name: string,
    @required
    role: string,
    @required
    department: string,
    @required
    expierence: number,
    @required
    id: number
  ) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('managers')
      .insert([{ age, name, role, department, expierence, id }])
      .select()
      .single();

    return data;
  }

  @logDecorator('updated', 'Manager')
  async updateManager(
    @required
    age: number,
    @required
    name: string,
    @required
    role: string,
    @required
    department: string,
    @required
    expierence: number,
    @required
    id: number
  ) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('managers')
      .update({ age, name, role, department, expierence })
      .eq('id', id)
      .select()
      .single();

    return data;
  }

  @logDecorator('deleted', 'Manager')
  async deleteManager(id: number) {
    const supabase = createClient();

    const { error } = await supabase.from('managers').delete().eq('id', id);
    if (error) {
      throw new Error('Was not able to delete');
    }
  }
}
