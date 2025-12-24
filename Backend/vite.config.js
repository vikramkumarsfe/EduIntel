import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: '#0A2342',
              'primary-focus': '#00E0FF',
              background: '#F8FAFC',
              'background-dark': '#0A2342',
              surface: '#FFFFFF',
              'surface-dark': 'rgba(10, 35, 66, 0.5)',
              copy: '#0A2342',
              'copy-dark': '#F8FAFC',
              'copy-muted': '#6B7280',
              'copy-muted-dark': '#9CA3AF',
              border: 'rgba(10, 35, 66, 0.1)',
              'border-dark': 'rgba(0, 224, 255, 0.2)',
            },
            fontFamily: {
              display: ['Poppins', 'Inter', 'sans-serif'],
            },
            borderRadius: {
              DEFAULT: '0.75rem',
              lg: '1rem',
              full: '9999px',
            },
            boxShadow: {
              'glow-primary': '0 0 15px 5px rgba(0, 224, 255, 0.3), 0 0 5px 0px rgba(0, 224, 255, 0.2)',
              'glow-primary-hover': '0 0 25px 8px rgba(0, 224, 255, 0.4), 0 0 10px 2px rgba(0, 224, 255, 0.3)',
            },
            backgroundImage: {
              'gradient-wave': 'linear-gradient(135deg, #0A2342 0%, #00E0FF 100%)',
            },
          },
        },
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      },
    }),
  ],
})
