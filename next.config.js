/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack (config, options) {
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        }
    });
    return config;
}
}

module.exports = nextConfig
