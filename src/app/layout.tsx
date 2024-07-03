import { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['vietnamese'], weight: ['100', '300', '400'] });

export const metadata: Metadata = {
    title: 'Next.js + TypeScript Starter',
    description: 'Next.js + TypeScript + ESLint + Prettier + Tailwind CSS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
