import React, { useState } from "react";
import heroVideo from "../assets/hero.mp4"; // Make sure this is the correct path for your video

const Home = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Aurea One",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      desc: "Premium smart wearable with luxury finish."
    },
    {
      id: 2,
      name: "Aurea Air",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657",
      desc: "Minimal wireless earbuds with crystal sound."
    },
    {
      id: 3,
      name: "Aurea Pro",
      img: "https://images.unsplash.com/photo-1518443895471-7b6a1b7c6f1b",
      desc: "Professional device crafted for creators."
    }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AUREA</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <h1 className="hero-text">AUREA</h1>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div
              key={p.id}
              className="card"
              onClick={() => setActiveProduct(p)}
            >
              <div className="loader"></div>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
            </div>
          ))}
        </div>

        {activeProduct && (
          <div className="product-detail">
            <h3>{activeProduct.name}</h3>
            <p>{activeProduct.desc}</p>
            <button onClick={() => setActiveProduct(null)}>Close</button>
          </div>
        )}
      </section>

      {/* STYLE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background: #fff;
          color: #111;
        }

        /* NAVBAR */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 70px;
          background: rgba(255,255,255,0.9);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          z-index: 10;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 4px;
        }

        .navbar ul {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .navbar li {
          cursor: pointer;
          font-weight: 500;
        }

        /* HERO */
        .hero {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 80px;
          letter-spacing: 12px;
          color: white;
          animation: fadeUp 2s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        /* PRODUCTS */
        .products {
          padding: 100px 60px;
          text-align: center;
        }

        .products h2 {
          font-size: 36px;
          margin-bottom: 40px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .card {
          position: relative;
          background: #fff;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          cursor: pointer;
          overflow: hidden;
        }

        .card img {
          width: 100%;
          border-radius: 12px;
          height: 200px;
          object-fit: cover;
        }

        .card h3 {
          margin-top: 15px;
        }

        /* LOADER HOVER */
        .card .loader {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.8);
          opacity: 0;
          transition: 0.3s;
        }

        .card:hover .loader {
          opacity: 1;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 0.6; }
          100% { opacity: 0.2; }
        }

        /* PRODUCT DETAIL */
        .product-detail {
          margin-top: 40px;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .product-detail button {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          background: #111;
          color: #fff;
          border-radius: 20px;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-text {
            font-size: 48px;
          }
          .navbar ul {
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
