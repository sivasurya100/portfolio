import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

//https://vite.dev/config//
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
     ],
})
theme: {
  extend:{

fontFamily : {
      'hero-font'-'Pacifico'
};
bordercolor :{
      'primary' - 'rgb(85 81 227)',
      'secondary' -'#2b2d77'
    };
  }
}
 /*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})*/
