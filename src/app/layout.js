

import { ContactProvider } from '@/context/ContactContext'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContactProvider>
          <div>
            {children}
          </div>
        </ContactProvider>
      </body>
    </html>
  )
}