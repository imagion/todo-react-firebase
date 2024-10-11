import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/app/lib/utils';
import AuthContextProvider from '@/context/AuthContext';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(montserrat.className, 'antialiased')}>
        <AuthContextProvider>
          <div className='flex min-h-screen flex-col bg-neutral-900'>
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
