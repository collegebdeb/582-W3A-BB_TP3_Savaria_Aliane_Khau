import { defineConfig } from 'vite';
export default defineConfig({
    base : '/website/',
build: {
emptyOutDir: true,
rollupOptions: {
input: {
main: 'index.html',
//...autres pages
},
},
},
});
