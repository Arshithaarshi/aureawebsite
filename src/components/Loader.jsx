import React, { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="loader">
        <h1 className="loader-text">
          AUREA<span className="dots"></span>
        </h1>
      </div>

      <style>{`
        .loader {
          height: 100vh;
          width: 100vw;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loader-text {
          font-size: 48px;
          letter-spacing: 6px;
          color: #fff;
          animation: pulse 1.2s infinite ease-in-out;
        }

        .dots::after {
          content: "";
          animation: dots 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }


      `}</style>
    </>
  );
};

export default Loader;
