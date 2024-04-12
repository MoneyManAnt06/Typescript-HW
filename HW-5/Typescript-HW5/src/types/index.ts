import { Employee } from '../interfaces/Employee';

export type Roles = 'Manager' | 'Intern' | 'COO';

export type ManagerType = { expierence: number } & Employee;
export type InternType = { mentor: string } & Employee;

export type actionType = 'created' | 'updated' | 'deleted';
