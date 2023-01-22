export interface Project {
  id: string;
  name: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  color: string;
}
