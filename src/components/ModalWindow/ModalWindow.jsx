import { useEffect } from "react";

export default function ModalWindow({ isActive, text, button, onClose }) {

    useEffect(() => {
        if (!isActive) return
        const closeByEscape = (e) => {
            if (e.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', closeByEscape);
        return () => document.removeEventListener('keydown', closeByEscape);
    },);

    function handleOverlay(e) {
        if (e.target === e.currentTarget) {
            onClose();
        };
    };



    return (
        <div className={`modal ${isActive && 'modal_opened'}`}
            onClick={handleOverlay}
        >
            <div className="modal__container">
                <h3 className="modal__container-info">{text} </h3>
                <p className="modal__container-smile">¯\_(ツ)_/¯</p>
            </div>
        </div>
    )
}