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
              ? 'bg-[#0fa4af] text-white'
              : 'border-[#0fa4af] text-[#0fa4af]'
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setStatus('Completed')}
          className={`border p-2 rounded font-semibold   ${
            status === 'Completed'
              ? 'bg-[#0fa4af] text-white'
              : 'border-[#0fa4af] text-[#0fa4af]'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setStatus('Pending')}
          className={`border p-2 rounded font-semibold   ${
            status === 'Pending'
              ? 'bg-[#0fa4af] text-white'
              : 'border-[#0fa4af] text-[#0fa4af]'
          }`}
        >
          Pending
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="relative flex items-center gap-2 bg-[#08444a] px-2 py-6 text-white rounded cursor-pointer"
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

            <span className="absolute right-12 text-sm border p-1 rounded  border-[#afdde5] text-[#afdde5]">
              {task.priority}
            </span>

            <button
              onClick={() => dispatch(removeTask(task))}
              className="absolute right-4 text-xl text-[#DC143C]"
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
