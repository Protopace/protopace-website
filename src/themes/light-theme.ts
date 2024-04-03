'use client';
import { Quicksand } from "next/font/google";
import { createTheme } from "@mui/material/styles"

import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const lightTheme = createTheme({
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
  palette: {
      mode: 'light',
      primary: {
        main: '#001D66',
      },
      secondary: {
        main: '#0070E0',
      },
    },
})

export default lightTheme;