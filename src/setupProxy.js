import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    '/serpapi',
    createProxyMiddleware({
      target: 'https://serpapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/serpapi': '', // Remove the '/serpapi' prefix when forwarding requests
      },
    })
  );
}