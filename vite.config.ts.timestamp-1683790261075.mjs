// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/AT/Desktop/gts-front-end/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/AT/Desktop/gts-front-end/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/AT/Desktop/gts-front-end/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce(
      (prev, [key, val]) => {
        return {
          ...prev,
          [key]: val
        };
      },
      {}
    )
  };
  if (command === "dev") {
    return {
      plugins: [
        react(),
        tsconfigPaths()
      ].filter(Boolean),
      port: 3e3,
      define: processEnvValues
    };
  } else {
    return {
      plugins: [
        react(),
        tsconfigPaths()
      ].filter(Boolean),
      define: processEnvValues
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBVFxcXFxEZXNrdG9wXFxcXGd0cy1mcm9udC1lbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFUXFxcXERlc2t0b3BcXFxcZ3RzLWZyb250LWVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQVQvRGVza3RvcC9ndHMtZnJvbnQtZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5cclxuICBcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUsIHNzckJ1aWxkIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIGNvbnN0IHByb2Nlc3NFbnZWYWx1ZXMgPSB7XHJcbiAgICAncHJvY2Vzcy5lbnYnOiBPYmplY3QuZW50cmllcyhlbnYpLnJlZHVjZShcclxuICAgICAgKHByZXYsIFtrZXksIHZhbF0pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgIFtrZXldOiB2YWwsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7fSxcclxuICAgIClcclxuICB9XHJcbiAgaWYgKGNvbW1hbmQgPT09ICdkZXYnKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLFxyXG4gICAgICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgICBwb3J0OjMwMDAsXHJcbiAgICAgZGVmaW5lOiBwcm9jZXNzRW52VmFsdWVzIFxyXG4gICAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcmVhY3QoKSxcclxuICAgICAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgICBdLmZpbHRlcihCb29sZWFuKSxcclxuICAgICAgZGVmaW5lOiBwcm9jZXNzRW52VmFsdWVzIFxyXG4gICAgfTtcclxuICB9XHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsU0FBUyxjQUFjLGVBQWU7QUFDclUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBSTFCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxNQUFNLFNBQVMsTUFBVztBQUNoRSxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsUUFBTSxtQkFBbUI7QUFBQSxJQUN2QixlQUFlLE9BQU8sUUFBUSxHQUFHLEVBQUU7QUFBQSxNQUNqQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTTtBQUNwQixlQUFPO0FBQUEsVUFDTCxHQUFHO0FBQUEsVUFDSCxDQUFDLEdBQUcsR0FBRztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDQSxNQUFJLFlBQVksT0FBTztBQUNyQixXQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixjQUFjO0FBQUEsTUFDbEIsRUFBRSxPQUFPLE9BQU87QUFBQSxNQUNkLE1BQUs7QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNQO0FBQUEsRUFDSixPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sY0FBYztBQUFBLE1BQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
