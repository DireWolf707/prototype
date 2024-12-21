import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/home/Navbar'
import ReactQueryProvider from '@/components/provider/ReactQueryProvider'
import ThemeProvider from '@/components/provider/ThemeProvider'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ReactQueryProvider>
                        <Navbar />
                        {children}
                    </ReactQueryProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
