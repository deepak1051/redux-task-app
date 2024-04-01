import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addTask } from '../store/slices/taskSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function TaskInput() {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addTask({
        id: nanoid(),
        title,
        completed: false,
      })
    );

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col py-6">
      <label className="py-4 text-lg font-medium text-gray-600 ">
        Task Title
      </label>

      <div className="flex gap-2">
        <input
          placeholder="Enter a todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border outline-none flex-1 p-2 rounded border-gray-300"
        />
        <button className="border  rounded p-2 bg-pink-700 text-white">
          Save
        </button>
      </div>
    </form>
  );
}
