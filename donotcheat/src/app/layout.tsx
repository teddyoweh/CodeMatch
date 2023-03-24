import './globals.css'

export const metadata = {
  title: 'CodeMatch',
  description: 'CodeMatch: A Cosine Similarity-Based Code Comparison Tool"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
