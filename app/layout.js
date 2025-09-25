import './globals.css';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Mariam Wambui | Portfolio',
  description: 'Software Engineering student passionate about Web, Data Science, ML, and Web3',
  keywords: [
    'Mariam Wambui',
    'Software Engineer',
    'Next.js',
    'Tailwind CSS',
    'Data Science',
    'Machine Learning',
    'Web3'
  ],
  authors: [{ name: 'Mariam Wambui' }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Mariam Wambui | Portfolio',
    siteName: 'Mariam Wambui Portfolio',
    description:
      'Software Engineering student passionate about Web, Data Science, ML, and Web3',
    images: [
      {
        url: '/Gemini_Generated_Image_qesbt3qesbt3qesb.png',
        width: 1200,
        height: 630,
        alt: 'Mariam Wambui portfolio preview'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariam Wambui | Portfolio',
    description:
      'Software Engineering student passionate about Web, Data Science, ML, and Web3',
    images: ['/Gemini_Generated_Image_qesbt3qesbt3qesb.png']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-dark text-slate-200">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

