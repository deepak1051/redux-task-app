import { useAppDispatch, useAppSelector } from '../store';

import { MdDelete } from 'react-icons/md';
import { removeTask, toggleTask } from '../store/slices/taskSlice';
import { useState } from 'react';

export default function TaskList() {
  const { tasks } = useAppSelector((state) => state.task);

  const [status, setStatus] = useState('All');

  const dispatch = useAppDispatch();

  const filteredTaskFn = () => {
    if (status === 'All') {
      return tasks;
    } else if (status === 'Completed') {
      return tasks.filter((task) => task.completed);
    } else if (status === 'Pending') {
      return tasks.filter((task) => !task.completed);
    }
  };

  const filteredTasks = filteredTaskFn();

  return (
    <div>
      <div className="flex gap-4 pb-4">
        <button
          onClick={() => setStatus('All')}
          className={`border p-2 rounded font-semibold   ${
            status === 'All'
              ? 'bg-teal-400 text-white'
              : 'border-teal-400 text-teal-400'
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setStatus('Completed')}
          className={`border p-2 rounded font-semibold   ${
            status === 'Completed'
              ? 'bg-teal-400 text-white'
              : 'border-teal-400 text-teal-400'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setStatus('Pending')}
          className={`border p-2 rounded font-semibold   ${
            status === 'Pending'
              ? 'bg-teal-400 text-white'
              : 'border-teal-400 text-teal-400'
          }`}
        >
          Pending
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="relative flex items-center gap-2 bg-slate-400 px-2 py-6 text-white rounded cursor-pointer"
          >
            <input
              className="w-4 h-4 cursor-pointer"
              onChange={() => {
                dispatch(toggleTask(task));
              }}
              checked={task.completed}
              type="checkbox"
            />
            <h2 className={`text-lg ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </h2>
            <button
              onClick={() => dispatch(removeTask(task))}
              className="absolute right-4 text-xl text-red-900"
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
