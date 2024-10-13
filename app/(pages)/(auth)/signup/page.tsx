'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSignup } from '@/hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { error, isPending, signupWithEmailAndPassword, signupWithGoogle } =
    useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupWithEmailAndPassword(email, password, displayName);
  };

  const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signupWithGoogle();
  };

  return (
    <>
      <h2 className='mb-4 text-center text-2xl'>Регистрация</h2>
      <form className='flex w-full flex-col gap-5' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userEmail' className='label label-star'>
            E-mail
          </label>
          <input
            required
            id='userEmail'
            type='email'
            className='form-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='displayName' className='label label-star'>
            Имя пользователя
          </label>
          <input
            required
            id='displayName'
            type='text'
            className='form-input'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password' className='label label-star'>
            Пароль
          </label>
          <input
            required
            id='userPassword'
            type='password'
            className='form-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <button
            type='submit'
            className='button focus-blue'
            disabled={isPending}>
            {isPending ? 'Регистристрируем...' : 'Зарегистрироваться'}
          </button>
          {error && <p>{error}</p>}
          <Link href='/login' className='text-sky-400'>
            Уже зарегистрированы?
          </Link>
        </div>
      </form>
      <hr className='border-neutral-500' />
      <button
        onClick={handleGoogle}
        className='button focus-blue mt-2'
        disabled={isPending}>
        {isPending
          ? 'Регистрируем через Google...'
          : 'Регистрация через Google'}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}
