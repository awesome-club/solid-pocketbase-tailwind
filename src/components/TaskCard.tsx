import { createSignal } from "solid-js";
import { Task } from "~/services/domain";

export interface TaskCardProps {
  task: Task;
}

export default function TaskCard({task}: TaskCardProps) {
  return (
    <article 
      class="absolute bg-yellow-400 py-3 px-6 rounded-lg"
      style={{left: `${task.x}px`, top: `${task.y}px`, background: task.color}}
      onClick={ev => ev.stopPropagation()}>
      <h3 class="font-bold w-64 text-lg">{task.name}</h3>
      <p>{task.description}</p>
    </article>
  );
}
