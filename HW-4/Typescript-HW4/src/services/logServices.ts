import Log from '../classes/Log';
import { createClient } from '../client';

export default class LogServices {
  async createLog(message: string): Promise<Log> {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('Log')
      .insert([{ message }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

// logServices.createLog('first log');
