import { useCallback, useEffect, useState } from "react";
import s from './ModalBackdrop.module.css';
import clsx from "clsx";
import { ANIMATION } from "../../constants.js";

const ModalBackdrop = ({ children, onClose }) => {
    const [active, setActive] = useState(true);

    const dynamicStyle = clsx(s.backdrop, active && s.active);

    const handleCloseModal = useCallback(
        (e) => {
            if (e.target === e.currentTatget || e.code === 'Escape') {
                setActive(false);
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleCloseModal);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleCloseModal);
            document.body.removeAttribute('style');
        };
    }, [handleCloseModal]);

    return (
        <div
            className={dynamicStyle}
            onClick={handleCloseModal}
        >
            {children}
        </div>
    );
};

export default ModalBackdrop;