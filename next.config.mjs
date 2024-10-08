/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,  // Ensure existing fallbacks are preserved
          fs: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  