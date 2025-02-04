let userConfig = {};
try {
  userConfig = (await import('./v0-user-next.config')).default;
} catch (e) {
  // Ignore error if the file doesn't exist
  console.warn('v0-user-next.config not found, using default configuration');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC minification
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    swcMinify: false, // Disable SWC minification
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default mergeConfig(nextConfig, userConfig);

function mergeConfig(baseConfig, customConfig) {
  if (!customConfig) {
    return baseConfig;
  }

  for (const key in customConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...customConfig[key],
      };
    } else {
      baseConfig[key] = customConfig[key];
    }
  }
  return baseConfig;
}
