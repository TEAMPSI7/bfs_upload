/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',  // Specify the output directory
  images: {
      unoptimized: true,  // Necessary for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bfs_official' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bfs_official/' : '',  // Adjust for GitHub Pages
};

export default nextConfig;
