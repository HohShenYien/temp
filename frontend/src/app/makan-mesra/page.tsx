import { Metadata } from "next";
import Product from "./Product";

export default function ProductPage() {
  return (
    <main className="relative">
      <Product />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Butter Croissant | Makan @ Mesra",
  icons: {
    icon: "/petronas.ico",
  },
};
