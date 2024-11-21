import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react()],
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