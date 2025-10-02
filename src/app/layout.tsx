import type { Metadata } from 'next';
import { Dela_Gothic_One } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { basic, theme } from '../../data/content';

const delaGothicOne = Dela_Gothic_One({ 
  subsets: ['latin'],
  variable: '--font-dela-gothic-one',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${basic.name_en} - ${basic.tagline}`,
  description: basic.about_en,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${delaGothicOne.variable} font-sans ${theme.use_dark_as_default ? 'dark' : ''}`}>
        <div className={`min-h-screen ${theme.use_dark_as_default ? 'bg-blue_bg text-light_text' : 'bg-blue_bg text-light_text'}`}>
          <NavBar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}