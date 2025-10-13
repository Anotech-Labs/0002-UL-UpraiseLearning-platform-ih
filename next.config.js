/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "68ba8901ec273803f26a400c.storage.fermion.app",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // add more domains here
      },
      {
        protocol: "https",
        hostname: "dummyimage.com", // keep extending as needed
      },
    ],
  },
};

export default config;
