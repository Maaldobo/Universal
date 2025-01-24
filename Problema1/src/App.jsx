import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import Carrusel from './components/Carrusel';
import { useState } from "react";

function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      <Navbar onShowCarousel={() => setShowCarousel(true)} />
      <Outlet />
      {showCarousel && <Carrusel onClose={() => setShowCarousel(false)} />}
    </>
  );
}

export default App;
