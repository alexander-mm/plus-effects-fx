import '../fondo.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const FondoAnimado = () => {
    return (
        <div className="relative h-full w-full cursor-pointer">
            <div className="bg-pale-red opacity-20 h-full w-full animate-fade-in-out"></div>
        </div>
    );
}

export default FondoAnimado;
