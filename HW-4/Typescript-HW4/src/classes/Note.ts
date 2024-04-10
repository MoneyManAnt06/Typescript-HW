export default class Note {
  created_at?: Date | undefined;
  title: string = '';
  description: string = '';
  user_id: number = 0;
  id?: number | undefined;
}
