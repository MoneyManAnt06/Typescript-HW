import { createClient } from '../client';

class internServices {
  async getIntern() {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('intern')
      .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
      .select();
  }
}
