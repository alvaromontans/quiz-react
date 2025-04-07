/**
 * Componente que muestra un indicador de carga mientras se cargan las preguntas.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el componente de carga.
 */
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Cargando preguntas...</p>
    </div>
  );
}
