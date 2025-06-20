import ProductsPageSection1Component from "@/components/productsPage/productsPageSection1.component";
import ProductsPageSection2Component from "@/components/productsPage/productsPageSection2.component";
import React from "react";

export const metadata = {
  title: "Products",
};

export default function ProductsPageMainComponent() {
  return (
    <>
      <ProductsPageSection1Component />
      <ProductsPageSection2Component />
    </>
  );
}
