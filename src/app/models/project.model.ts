// Project model interface
import { Task } from './task.model';

export interface Project {
  id: number;
  name: string;
  description: string;
  deadline: string;
  tasks: Task[];
}
