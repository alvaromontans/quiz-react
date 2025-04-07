/**
 * Componente de Error que muestra un mensaje de error.
 * 
 * @returns {JSX.Element} Un elemento JSX que muestra un mensaje de error.
 */
function Error() {
  return (
    <p className="error">
      <span>💥</span> Hubo un error al obtener las preguntas.
    </p>
  );
}

export default Error;