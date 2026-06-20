"use client";

import React from "react";
import ProductCard from "../common/ProductCard";

export default function ProductList({ data }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
