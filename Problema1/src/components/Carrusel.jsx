import React, { useState } from "react";

export default function Carrusel({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Lista de imágenes para el carrusel
  const images = [
    "../src/assets/mx_universal.750.jpg",
    "../src/assets/mx_universal.751.jpg",
    "../src/assets/mx_universal.752.jpg",
    "../src/assets/mx_universal.753.jpg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
      >
        <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Galería</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                    >
                      <img
                        src={src}
                        className="d-block w-100 "
                        alt={`Imagen ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={handlePrev}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={handleNext}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
