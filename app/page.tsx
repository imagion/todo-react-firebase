import TodosForm from '@/components/TodosForm';
import TodosList from '@/components/TodosList';
import Header from '@/components/Header';
import RequireAuth from '@/components/RequireAuth';

export default function Home() {
  return (
    <RequireAuth>
      <Header />
      <main className='gradient flex h-full flex-1 flex-col items-center justify-center'>
        <div className='form'>
          <TodosList />
          <TodosForm />
        </div>
      </main>
    </RequireAuth>
  );
}
