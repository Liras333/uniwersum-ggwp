/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
     remotePatterns: [
     {
        protocol: 'https',
        hostname: 'juiawyislakjdfzecahw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/obrazy/**',
    },
    ],
 },
};

export default nextConfig;
