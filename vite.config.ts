import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
	build: {
		sourcemap: false,
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true,
	},
	server: {
		open: true,
	},
});
