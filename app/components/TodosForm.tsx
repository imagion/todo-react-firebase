'use client';

import { useState } from 'react';
import { useAuthContext } from '@/hooks/useContext';
import { useFirestore } from '@/hooks/useFirestore';

export default function TodosForm() {
  const [todo, setTodo] = useState<string>('');
  const { state } = useAuthContext();
  const { addDocument } = useFirestore('todos');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addDocument({
      todo,
      uid: state.user?.uid,
    });

    setTodo('');

    // FIX:
    // Reset the form field when the document is successfully added
    // useEffect(() => {
    //   if (response.success) {
    //     setTodo('');
    //   }
    // }, [response.success]);
  };

  return (
    <form className='flex w-full flex-col gap-2' onSubmit={handleSubmit}>
      <input
        required
        type='text'
        placeholder='Напишите новую задачу'
        className='form-input'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className='button focus-blue'>Добавить новую задачу</button>
    </form>
  );
}
