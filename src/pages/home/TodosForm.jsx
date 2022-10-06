import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// firebase imports
import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

export default function TodosForm() {
  const [todo, setTodo] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'todos'), {
        todo,
        uid: user.uid,
      })

      setTodo('')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type='text'
        placeholder='write a new todo'
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
      <button className='btn'>Add new todo</button>
    </form>
  )
}
