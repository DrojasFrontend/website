/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: [
      "webdesignerpixel.com", // Agrega el dominio que aloja las imágenes aquí
    ],
  },
};

module.exports = nextConfig;
