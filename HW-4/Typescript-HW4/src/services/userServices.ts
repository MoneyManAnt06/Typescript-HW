import User from '../classes/User';
import { createClient } from '../client';
import { email } from '../decorators/emailDecorator';
import { logDecorator } from '../decorators/logDecorator';
import { required } from '../decorators/requiredDecorator';
import { validate } from '../decorators/validateDecorator';

export default class UserServices {
  async getUser(): Promise<User[]> {
    const supabase = createClient();

    const { data: user, error } = await supabase.from('User').select();

    if (error) {
      throw new Error(error.message);
    }
    return user;
  }
  @validate
  @logDecorator()
  async createUser(
    @required
    name: string,
    lastName: string,
    @email
    email: string
  ): Promise<User> {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('User')
      .insert([{ name, lastName, email }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async updateUser(
    name: string,
    lastName: string,
    email: string,
    id: number
  ): Promise<User> {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('User')
      .update({ name, lastName, email })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async deleteIntern(id: number): Promise<string> {
    const supabase = createClient();

    const { error } = await supabase.from('User').delete().eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
    return 'The note was deleted!!!';
  }
}
