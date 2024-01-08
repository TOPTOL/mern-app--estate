import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import svgrPlugin from 'vite-plugin-svgr';
// import viteTsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3500',
        secure: false,
      },
    },
  },

  plugins: [react()],
    
  //   { 
  //   jsxRuntime: 'classic' }),
  // viteTsconfigPaths(), svgrPlugin()],
});
