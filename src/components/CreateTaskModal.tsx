import { createSignal } from "solid-js";

export interface CreateTaskModalProps {
  onClose: () => void;
  onSave: (title: string, description: string) => void;
}

export default function CreateTaskModal({onClose, onSave}: CreateTaskModalProps) {
  const [title, setTitle] = createSignal("");
  const [description, setDescription] = createSignal("");

  return (
    <div class="relative z-10" onClick={ev => ev.stopPropagation()}>
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10">
        <div class="flex min-h-full justify-center text-center items-center">
          <div class="overflow-hidden rounded-lg bg-white text-left shadow-xl">
            <div class="bg-white px-6 py-6 flex flex-col">
              <h3 class="text-xl font-medium leading-6 text-gray-900">Add a task</h3>
              <input type="text" placeholder="Title" class="my-2 py-2 px-4 rounded-md border border-gray-300 w-96"
                onChange={ev => setTitle((ev.target as HTMLInputElement).value)}/>
              <textarea class="py-2 px-4 rounded-md border border-gray-300 my-4" 
                onChange={ev => setDescription((ev.target as HTMLInputElement).value)} />
            </div>
            <div class="bg-gray-50 px-6 py-4 flex">
              <button class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm sm:w-auto sm:text-sm"
                disabled={!title() || !description()}
                onClick={() => {
                  onSave(title(), description());
                  onClose();
                }}>Save</button>
              <button class="ml-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 w-auto"
                onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
