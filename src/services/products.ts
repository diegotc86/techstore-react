import { baseUrl } from "./config";

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Polo React",
//     imgSrc: "/images/polos/polo-react.png",
//     price: 20,
//     stock: 15,
//   },
//   {
//     id: 2,
//     title: "Polo JavaScript",
//     imgSrc: "/images/polos/polo-js.png",
//     price: 20,
//     stock: 8,
//   },
//   {
//     id: 3,
//     title: "Polo Node.js",
//     imgSrc: "/images/polos/polo-node.png",
//     price: 20,
//     stock: 12,
//   },
//   {
//     id: 4,
//     title: "Polo TypeScript",
//     imgSrc: "/images/polos/polo-ts.png",
//     price: 20,
//     stock: 6,
//   },
//   {
//     id: 5,
//     title: "Polo Backend Developer",
//     imgSrc: "/images/polos/polo-backend.png",
//     price: 25,
//     stock: 9,
//   },
//   {
//     id: 6,
//     title: "Polo Frontend Developer",
//     imgSrc: "/images/polos/polo-frontend.png",
//     price: 25,
//     stock: 11,
//   },
//   {
//     id: 7,
//     title: "Polo Full-Stack Developer",
//     imgSrc: "/images/polos/polo-fullstack.png",
//     price: 25,
//     stock: 7,
//   },
//   {
//     id: 8,
//     title: "Polo It's A Feature",
//     imgSrc: "/images/polos/polo-feature.png",
//     price: 15,
//     stock: 0,
//   },
//   {
//     id: 9,
//     title: "Polo It Works On My Machine",
//     imgSrc: "/images/polos/polo-works.png",
//     price: 15,
//     stock: 0,
//   },
// ];

// Procedimeinto Asíncrono -> Promise
export async function getProducts(token: string) {
  const response = await fetch(`${baseUrl}/productosBD`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  }
  const products = await response.json();

  return products;
}
