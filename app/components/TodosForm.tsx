'use client';

import { useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useFirestore } from '@/hooks/useFirestore';

export default function TodosForm() {
  const [todo, setTodo] = useState('');
  const { state } = useAuthContext();
  const { addDocument, response } = useFirestore('todos');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addDocument({
      todo,
      uid: state.user?.uid,
    });

    setTodo('');

    // Reset the form field when the document is successfully added
    // useEffect(() => {
    //   if (response.success) {
    //     setTodo('');
    //   }
    // }, [response.success]);
  };

  return (
    <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit}>
      <input
        required
        type='text'
        placeholder='Напишите новую задачу'
        className='p-4 text-neutral-800'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className='inline-block bg-blue-500 p-4 uppercase'>
        Добавить новую задачу
      </button>
    </form>
  );
}
