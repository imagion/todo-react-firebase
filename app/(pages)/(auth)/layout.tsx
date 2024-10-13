import RedirectIfAuthenticated from '@/components/RedirectIfAuthenticated';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RedirectIfAuthenticated>
      <div className='gradient flex h-screen w-screen items-center justify-center'>
        <div className='form'>{children}</div>
      </div>
    </RedirectIfAuthenticated>
  );
}
