import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
//  CORS 오류를 해결하기 위해서 프록시 서버 설정
//    프록시 서버 설정은 여러개를 추가할 수 있음
  server: {
    proxy: {
      //  리액트에서 사용하는 프록시 서버 기본 주소 이름을 설정
      //  리액트에서 접속을 원하는 서버의 기본 주소의 패턴을 설정
      '/api': {
        //  실제 접속할 서버의 주소를 설정
        target: 'http://localhost:8080',
        //  CORS 해결 설정, true = 사용, false = 미사용
        changeOrigin: true,
        //  프록시 서버에서 사용할 URL 경로를 설정
        rewrite: (path) => path.replace(/^\/api/, ''),
        // SSL 보안 설정이 있어도 사용할 수 있도록 설정
        secure: false,
      },
    },
  },
})
