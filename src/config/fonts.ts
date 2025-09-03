import { IBM_Plex_Sans as IBMPlexSans } from 'next/font/google';

const globalFont = IBMPlexSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const fontConfig = {
  globalFont,
};
