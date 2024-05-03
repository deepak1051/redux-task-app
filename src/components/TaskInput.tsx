import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addTask } from '../store/slices/taskSlice';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export default function TaskInput() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('High');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      toast.error('Please enter a task title');
      return;
    }

    dispatch(
      addTask({
        id: nanoid(),
        title,
        completed: false,
        priority,
      })
    );

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col py-6">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <label className="py-2 text-lg font-medium text-black ">
            Task title :
          </label>
          <input
            placeholder="Enter a todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border outline-none flex-1 p-2 rounded border-gray-300"
          />
        </div>

        <div className="flex gap-4">
          <label className="py-2 text-lg font-medium text-black ">
            Priority :
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            id="priority"
            name="priority"
            className="cursor-pointer border outline-none flex-1 p-2 rounded border-gray-300"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <button className="border  rounded p-2 bg-[#078893] bg-green-950 text-white">
          Save
        </button>
      </div>
    </form>
  );
}
