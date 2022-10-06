// firebase imports
import { db } from '../../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

export default function TodosList({ todos }) {
  const handleClick = async id => {
    const ref = doc(db, 'todos', id)
    await deleteDoc(ref)
  }

  return (
    <div className='todos__list'>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className='todos__item'>
            {todo.todo}
            <span onClick={() => handleClick(todo.id)}>
              <svg className='trashcan' height='24px' width='24px'>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
