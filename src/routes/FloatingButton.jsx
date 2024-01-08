import '../FloatingButton.css';

const FloatingButton = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=593980429801"
            className="floating-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default FloatingButton;