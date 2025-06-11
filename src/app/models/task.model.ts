// Task model definition for a project management application
export interface Task {
  id: number;
  projectId: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  deadline: string;
}

