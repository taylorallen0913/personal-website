import '~/styles/globals.css';
import '~/styles/cursor.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const roslindaleDisplayFont = localFont({
  src: [
    {
      path: '../../public/fonts/RoslindaleDisplayMedium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RoslindaleDisplayMediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-roslindale-display',
});

export const metadata: Metadata = {
  title: 'Taylor Allen',
  description: "Taylor Allen's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roslindaleDisplayFont.variable}`}>{children}</body>
    </html>
  );
}
