import './globals.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
