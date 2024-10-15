import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/app/lib/utils';
import AuthContextProvider from '@/context/AuthContext';
import ThemeContextProvider from '@/context/ThemeContext';

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
      <body className={cn(montserrat.className, 'text-foreground antialiased')}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <div className='flex min-h-screen flex-col'>{children}</div>
          </ThemeContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
