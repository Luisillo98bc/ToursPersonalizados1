import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto desplaza la ventana a la parte superior
    // cada vez que el `pathname` (la ruta) cambia.
    window.scrollTo(0, 0);
  }, [pathname]); // Dependencia del pathname para reaccionar al cambio de ruta

  return null; // Este componente no renderiza nada en el DOM
};

export default ScrollToTop;
