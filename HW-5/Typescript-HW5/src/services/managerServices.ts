import Manager from '../classes/Manager';
import { createClient } from '../client';
import { logDecorator } from '../decorators/logDecorator';
import { minLength } from '../decorators/minLengthDecorator';
import { required } from '../decorators/requiredDecorator';
import { validate } from '../decorators/validateDecorator';

export class ManagerServices {
  async getManager() {
    const supabase = createClient();

    let { data: managers, error } = await supabase.from('managers').select('*');
    return managers;
  }

  @validate
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
    expierence: number
  ) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('managers')
      .insert([{ age, name, role, department, expierence }])
      .select()
      .single();

    return data;
  }

  @validate
  @logDecorator('updated', 'Manager')
  async updateManager(
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
      .update({ age, name, role, department, expierence })
      .eq('id', id)
      .select()
      .single();

    return data;
  }

  @validate
  @logDecorator('deleted', 'Manager')
  async deleteManager(id: number) {
    const supabase = createClient();

    const { error } = await supabase.from('managers').delete().eq('id', id);
    if (error) {
      throw new Error('Was not able to delete');
    }
  }
}
