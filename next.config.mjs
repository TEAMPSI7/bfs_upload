/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',  // Ensure the output directory is 'out'
  images: {
      unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bfs-official/' : '',  // Set the asset prefix for GitHub Pages
};

export default nextConfig;
