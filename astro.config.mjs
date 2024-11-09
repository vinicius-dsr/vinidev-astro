import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
// @ts-check
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	output: "hybrid",
	adapter: vercel(),

	integrations: [
		tailwind(),
		react(),
		starlight({
			title: "My Documentation",
			plugins: [],
		}),
	],

	image: {
		domains: ["utfs.io"],
	},
});
