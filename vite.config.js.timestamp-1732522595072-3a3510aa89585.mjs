// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Documents/GitHub/AquaTrack-frontend-6/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/Documents/GitHub/AquaTrack-frontend-6/node_modules/@vitejs/plugin-react/dist/index.mjs";
import FullReload from "file:///C:/Users/User/Documents/GitHub/AquaTrack-frontend-6/node_modules/vite-plugin-full-reload/dist/index.js";
import { ViteImageOptimizer } from "file:///C:/Users/User/Documents/GitHub/AquaTrack-frontend-6/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "[name].[hash].js",
          chunkFileNames: "[name].[hash].js"
        }
      },
      outDir: "dist"
    },
    css: {
      modules: {
        scopeBehaviour: "local"
      }
    },
    plugins: [
      react(),
      FullReload(["./src/**/*.{js,jsx,tsx,css,json,svg,webp}"]),
      ViteImageOptimizer({
        exclude: /^sprite.svg$/,
        png: {
          quality: 60
        },
        jpeg: {
          quality: 60
        },
        jpg: {
          quality: 60
        },
        webp: {
          quality: 60
        }
      })
    ],
    base: "/",
    resolve: {
      alias: {
        src: "/src",
        components: "/src/components",
        pages: "/src/pages",
        assets: "/src/assets"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcQXF1YVRyYWNrLWZyb250ZW5kLTZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBcXVhVHJhY2stZnJvbnRlbmQtNlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXNlci9Eb2N1bWVudHMvR2l0SHViL0FxdWFUcmFjay1mcm9udGVuZC02L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFtjb21tYW5kID09PSAnc2VydmUnID8gJ2dsb2JhbCcgOiAnX2dsb2JhbCddOiB7fSxcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uW2hhc2hdLmpzJyxcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW25hbWVdLltoYXNoXS5qcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICBzY29wZUJlaGF2aW91cjogJ2xvY2FsJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHJlYWN0KCksXHJcbiAgICAgIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qLntqcyxqc3gsdHN4LGNzcyxqc29uLHN2Zyx3ZWJwfSddKSxcclxuICAgICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgICBleGNsdWRlOiAvXnNwcml0ZS5zdmckLyxcclxuICAgICAgICBwbmc6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDYwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAganBlZzoge1xyXG4gICAgICAgICAgcXVhbGl0eTogNjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBqcGc6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDYwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VicDoge1xyXG4gICAgICAgICAgcXVhbGl0eTogNjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIHNyYzogJy9zcmMnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6ICcvc3JjL2NvbXBvbmVudHMnLFxyXG4gICAgICAgIHBhZ2VzOiAnL3NyYy9wYWdlcycsXHJcbiAgICAgICAgYXNzZXRzOiAnL3NyYy9hc3NldHMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUNwWCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywwQkFBMEI7QUFFbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE1BQU07QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sQ0FBQyxZQUFZLFVBQVUsV0FBVyxTQUFTLEdBQUcsQ0FBQztBQUFBLElBQ2pEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sV0FBVyxDQUFDLDJDQUEyQyxDQUFDO0FBQUEsTUFDeEQsbUJBQW1CO0FBQUEsUUFDakIsU0FBUztBQUFBLFFBQ1QsS0FBSztBQUFBLFVBQ0gsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxLQUFLO0FBQUEsVUFDSCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsTUFBTTtBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
