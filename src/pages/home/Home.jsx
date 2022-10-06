import TodosForm from './TodosForm'
import TodosList from './TodosList'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  const { documents: todos } = useCollection('todos', ['uid', '==', user.uid])

  return (
    <main className='todo'>
      <h2 className='page-title'>Todo</h2>
      <div className='todos'>
        {todos && <TodosList todos={todos} />}
        <TodosForm />
      </div>
    </main>
  )
}
