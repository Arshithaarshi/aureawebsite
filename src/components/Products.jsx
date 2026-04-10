import { useState } from "react";

const products = [
  { id: 1, name: "Luxury Watch", img: "/product1.jpg", desc: "Premium quality watch" },
  { id: 2, name: "Gold Ring", img: "/product2.jpg", desc: "Elegant gold ring" },
];

const Products = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="products">
      {products.map(p => (
        <div key={p.id} onClick={() => setSelected(p)}>
          <img src={p.img} />
          <h3>{p.name}</h3>
        </div>
      ))}

      {selected && (
        <div className="details">
          <h2>{selected.name}</h2>
          <p>{selected.desc}</p>
        </div>
      )}
    </section>
  );
};

export default Products;
