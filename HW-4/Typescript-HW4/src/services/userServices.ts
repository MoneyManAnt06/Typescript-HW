import { createClient } from '../client';

class UserServices {
  async getUser() {
    const supabase = createClient();

    let { data: user, error } = await supabase.from('User').select('*');

    console.log(user);
  }

  async createUser(name: string, lastName: string, email: string) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('User')
      .insert([{ name, lastName, email }])
      .select()
      .single();

    console.log(data);
  }
}

const userServices = new UserServices();

// userServices.getUser()
userServices.createUser('Anthony', 'Lopez', 'Anthony.lopez@gmail.com');
