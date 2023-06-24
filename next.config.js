/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "spoonacular.com"
            }
        ]
    }
}

module.exports = nextConfig
