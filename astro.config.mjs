import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const runningInGithubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site:
    process.env.SITE_URL ??
    (runningInGithubActions && owner
      ? `https://${owner}.github.io`
      : "http://localhost:4321"),
  base:
    process.env.BASE_PATH ??
    (runningInGithubActions && repo ? `/${repo}` : "/"),
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })],
});
