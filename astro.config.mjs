import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
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

	integrations: [tailwind(), react(), sitemap()],
	site: "https://vinidev-astro.vercel.app",

	image: {
		domains: ["utfs.io"],
	},
});
