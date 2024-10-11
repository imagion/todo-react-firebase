'use client';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuthContext } from '@/hooks/useAuthContext';
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
      <ul>
        {error && <p className='text-red-500'>error</p>}
        {!documents && <div>Loading...</div>}

        {documents &&
          documents.map((doc) => (
            <li
              key={doc.id}
              className='flex items-center justify-between rounded bg-neutral-600 p-4 text-xl'>
              <span>{doc.todo}</span>
              <span
                className='cursor-pointer rounded bg-red-500 p-2'
                onClick={() => deleteDocument(doc.id)}>
                <Trashcan width={24} height={24} className='text-red-700' />
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
