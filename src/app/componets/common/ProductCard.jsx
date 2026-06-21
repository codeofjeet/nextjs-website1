// import React from "react";

// export default function ProductCard({ data }) {
//   return (
//     <>
//       {data ? (
//         <figure className="bg-white rounded-lg shadow-md p-4">
//           <img
//             src={data.thumbnail}
//             alt={data.title}
//             className="w-full h-48 object-cover rounded"
//           />

//           <h3 className="text-xl py-3">
//             {data.title} (${data.price})
//           </h3>

//           <p className="pb-3">{data.description}</p>

//           <button className="bg-blue-600 text-white px-4 py-2 rounded">
//             Read More
//           </button>
//         </figure>
//       ) : (
//         <figure className="bg-white rounded-lg shadow-md p-4">
//           No Product Found
//         </figure>
//       )}
//     </>
//   );
// }

import Link from "next/link";

export default function ProductCard({ data }) {
  return (
    <figure className="bg-white rounded-lg shadow-md p-4">
      <img src={data.thumbnail} alt={data.title} />

      <h3 className="text-xl py-3">{data.title}</h3>

      <p>{data.description}</p>

      <Link href={`/product-server/${data.id}`}>
        <button className="bg-black text-white px-4 py-2 rounded mt-3">
          Read More
        </button>
      </Link>
    </figure>
  );
}
