import PocketBase from "pocketbase";
import { Position, Project, Task } from "./domain";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function getActiveProject(): Promise<Project> {
  let id = localStorage.getItem("project");
  if (!id) {
    const project = await pb
      .collection("project")
      .create<Project>({ name: "Project" });
    id = project.id;
    localStorage.setItem("project", id);
    return project;
  }
  return await pb.collection("project").getOne(id);
}

export function onTaskAdded(callback: (task: Task) => void) {
  pb.collection("task").subscribe<Task>("*", (ev) => {
    if (ev.action === "create") {
      callback(ev.record);
    }
  });
}

export async function getProjectTasks(id: string): Promise<Task[]> {
  const data = await pb
    .collection("task")
    .getList<Task>(0, 20, {
      field: id,
    });
  return data.items;
}

export async function saveTask(
  project: Project,
  name: string,
  description: string,
  position: Position,
): Promise<Task> {
  return await pb
    .collection("task")
    .create<Task>({
      name,
      description,
      field: project.id,
      x: position.x,
      y: position.y - 92,
      color: getRandomColor(),
    });
}

const color = [
  "rgb(251 191 36)",
  "rgb(163 230 53)",
  "rgb(34 211 238)",
  "rgb(129 140 248)",
];
export function getRandomColor() {
  return color[Math.floor(Math.random() * 3 + 1)];
}
