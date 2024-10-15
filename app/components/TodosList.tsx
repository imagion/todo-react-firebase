'use client';

import { useAuthContext } from '@/hooks/useContext';
import { useCollection } from '@/hooks/useCollection';
import { useFirestore } from '@/hooks/useFirestore';
import Trashcan from '@/public/trashcan.svg';

export default function TodosList() {
  const { state } = useAuthContext();
  const { user: authUser } = state;
  const { documents, error } = useCollection(
    'todos',
    ['uid', '==', authUser?.uid],
    ['createdAt', 'asc'],
  );
  const { deleteDocument } = useFirestore('todos');

  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2'>
        {error && <p className='text-red-500'>error</p>}
        {!documents && <div>Loading...</div>}

        {documents &&
          documents.map((doc) => (
            <li
              key={doc.id}
              className='bg-list relative flex flex-nowrap items-center justify-between rounded text-xl'>
              <span className='basis-11/12 py-1 pl-2'>{doc.todo}</span>
              <span
                className='cursor-pointer overflow-hidden rounded bg-red-500 p-2'
                onClick={() => deleteDocument(doc.id)}>
                <Trashcan width={24} height={24} className='text-red-700' />
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
