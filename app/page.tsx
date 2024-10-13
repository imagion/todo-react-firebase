import TodosForm from '@/components/TodosForm';
import TodosList from '@/components/TodosList';
import Header from '@/components/Header';
import RequireAuth from '@/components/RequireAuth';

export default function Home() {
  return (
    <RequireAuth>
      <Header />
      <main className='flex h-full flex-1 flex-col items-center justify-center'>
        <div className='flex w-[min(100%,35rem)] flex-col items-center gap-2 rounded-xl bg-neutral-500 p-2'>
          <TodosList />
          <TodosForm />
        </div>
      </main>
    </RequireAuth>
  );
}
