import { defineConfig } from 'vite';
export default defineConfig({
    base : '/582-W3A-BB_TP3_Savaria_Aliane_Khau/',
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
