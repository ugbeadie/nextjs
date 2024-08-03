// "use client";

// import { useEffect, useState } from "react";

// const Data = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//       data = await data.json();
//       console.log(data);
//       setProduct(data);
//     };
//     fetchData();
//   });

//   return (
//     <div>
//       {product.map((p) => (
//         <p key={p.id}>{p.title}</p>
//       ))}
//     </div>
//   );
// };

// export default Data;

const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
};

const Data = async () => {
  let products = await fetchData();
  console.log(products);

  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Data;
