export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col max-w-7xl w-full mx-auto">
            <main className="flex-1 wrapper">
                {children}
            </main>
        </div>
    )
}