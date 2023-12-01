// vite.config.js
import { defineConfig } from "file:///C:/Users/HIGH%20COMMISSIONER/Desktop/Proyecto_Final/movies-clon/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HIGH%20COMMISSIONER/Desktop/Proyecto_Final/movies-clon/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\HIGH COMMISSIONER\\Desktop\\Proyecto_Final\\movies-clon";
var vite_config_default = defineConfig(({ command, mode }) => {
  let environmentFile;
  switch (mode) {
    case "qa":
      environmentFile = path.join("environments", "environment.qa.js");
      break;
    case "uat":
      environmentFile = path.join("environments", "environment.uat.js");
      break;
    case "prod":
      environmentFile = path.join("environments", "environment.prod.js");
      break;
    default:
      environmentFile = path.join("environments", "environment.js");
      break;
  }
  console.log("--------------------------------------------");
  console.log("VITE CONFIGURATION");
  console.log("COMMAND: ", command);
  console.log("MODE: ", mode);
  console.log("ENVIRONMENT FILE: ", environmentFile);
  console.log("--------------------------------------------");
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.js"
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@environments": path.resolve(__vite_injected_original_dirname, environmentFile)
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxISUdIIENPTU1JU1NJT05FUlxcXFxEZXNrdG9wXFxcXFByb3llY3RvX0ZpbmFsXFxcXG1vdmllcy1jbG9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxISUdIIENPTU1JU1NJT05FUlxcXFxEZXNrdG9wXFxcXFByb3llY3RvX0ZpbmFsXFxcXG1vdmllcy1jbG9uXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ISUdIJTIwQ09NTUlTU0lPTkVSL0Rlc2t0b3AvUHJveWVjdG9fRmluYWwvbW92aWVzLWNsb24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgbGV0IGVudmlyb25tZW50RmlsZTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIFwicWFcIjpcbiAgICAgIGVudmlyb25tZW50RmlsZSA9IHBhdGguam9pbihcImVudmlyb25tZW50c1wiLCBcImVudmlyb25tZW50LnFhLmpzXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwidWF0XCI6XG4gICAgICBlbnZpcm9ubWVudEZpbGUgPSBwYXRoLmpvaW4oXCJlbnZpcm9ubWVudHNcIiwgXCJlbnZpcm9ubWVudC51YXQuanNcIik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJwcm9kXCI6XG4gICAgICBlbnZpcm9ubWVudEZpbGUgPSBwYXRoLmpvaW4oXCJlbnZpcm9ubWVudHNcIiwgXCJlbnZpcm9ubWVudC5wcm9kLmpzXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgZW52aXJvbm1lbnRGaWxlID0gcGF0aC5qb2luKFwiZW52aXJvbm1lbnRzXCIsIFwiZW52aXJvbm1lbnQuanNcIik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gIGNvbnNvbGUubG9nKFwiVklURSBDT05GSUdVUkFUSU9OXCIpO1xuICBjb25zb2xlLmxvZyhcIkNPTU1BTkQ6IFwiLCBjb21tYW5kKTtcbiAgY29uc29sZS5sb2coXCJNT0RFOiBcIiwgbW9kZSk7XG4gIGNvbnNvbGUubG9nKFwiRU5WSVJPTk1FTlQgRklMRTogXCIsIGVudmlyb25tZW50RmlsZSk7XG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgICBzZXR1cEZpbGVzOiBcIi4vdGVzdHMvc2V0dXAuanNcIixcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBcIkBlbnZpcm9ubWVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgZW52aXJvbm1lbnRGaWxlKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVgsU0FBUyxvQkFBb0I7QUFDcFosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELE1BQUk7QUFFSixVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUs7QUFDSCx3QkFBa0IsS0FBSyxLQUFLLGdCQUFnQixtQkFBbUI7QUFDL0Q7QUFBQSxJQUVGLEtBQUs7QUFDSCx3QkFBa0IsS0FBSyxLQUFLLGdCQUFnQixvQkFBb0I7QUFDaEU7QUFBQSxJQUVGLEtBQUs7QUFDSCx3QkFBa0IsS0FBSyxLQUFLLGdCQUFnQixxQkFBcUI7QUFDakU7QUFBQSxJQUVGO0FBQ0Usd0JBQWtCLEtBQUssS0FBSyxnQkFBZ0IsZ0JBQWdCO0FBQzVEO0FBQUEsRUFDSjtBQUVBLFVBQVEsSUFBSSw4Q0FBOEM7QUFDMUQsVUFBUSxJQUFJLG9CQUFvQjtBQUNoQyxVQUFRLElBQUksYUFBYSxPQUFPO0FBQ2hDLFVBQVEsSUFBSSxVQUFVLElBQUk7QUFDMUIsVUFBUSxJQUFJLHNCQUFzQixlQUFlO0FBQ2pELFVBQVEsSUFBSSw4Q0FBOEM7QUFFMUQsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUE7QUFBQSxRQUVMLGlCQUFpQixLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQzFEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
