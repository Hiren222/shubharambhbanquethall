import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Shubharambh Banquet Hall | Event Venue near Thane Railway Station West (Platform No. 1)',
  description: 'Shubharambh Banquet Hall is a popular, spacious AC event venue located right beside Thane Railway Station West, Platform No. 1 (400602). Rated 4.1 ★ with 399 Google reviews for weddings, engagements, receptions, birthday parties, and corporate events. Call 098194 98760.',
  openGraph: {
    title: 'Shubharambh Banquet Hall | Event Venue near Thane Railway Station West (Platform No. 1)',
    description: 'Popular spacious AC banquet hall beside Thane Railway Station West, Platform No. 1. Rated 4.1 ★ (399 reviews) for weddings, engagements, receptions, birthdays, and corporate events. Call 098194 98760.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubharambh Banquet Hall | Thane Railway Station West (Platform No. 1)',
    description: 'Spacious AC banquet hall beside Thane Railway Station West, Platform No. 1. Rated 4.1 ★ (399 reviews) for weddings, receptions, and celebrations. Call 098194 98760.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
