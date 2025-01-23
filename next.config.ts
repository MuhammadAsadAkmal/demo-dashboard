import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"], // Supported languages
    defaultLocale: "en", // Default language
    localeDetection: false

  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "./");
    return config;
  },
};

export default nextConfig;
