import React, {
    useState,
    forwardRef,
    ReactNode,
    useEffect
} from "react";

interface ModalProps {
    title?: string;
    children: ReactNode;
    onClose?: () => void;
    testId?: string;
    isOpened: boolean;
}
const Modal = forwardRef(
    ({ title, onClose, testId, children, isOpened }: ModalProps, ref: any) => {
        const [isVisible, setVisible] = useState(false);
        useEffect(() => {
            if (isOpened) {
                setTimeout(() => {
                    openModal();
                }, 10);
                document.body.classList.add("overflow-hidden");
            }
            return () => {
                document.body.classList.remove("overflow-hidden");
            };
        }, [isOpened]);
        const wrapperClasses = (
            "fixed flex items-center justify-around w-full h-full top-0 left-0 right-0 bottom-0 z-998 overflow-y-auto"
        );
        const backdropClasses = (
            `modal-backdrop transition-opacity ${isVisible ? "opacity-1" : "opacity-0"} fixed inset-0 z-999 bg-black opacity-60 duration-300 transition-opacity backdrop-blur`
        );
        /* purgecss: bg-white  bg-dark-7 text-white text-dark-8*/
        const modalClasses = (`
             absolute rounded-lg z-1000 sm:my-90p duration-100 transition-all ${isVisible ? "opacity-1" : "opacity-0 transform-y-40p"} bg-gray-200`);


        const closeModal = (): void => {
            setVisible(false);
            onClose && onClose();
        };
       

        const openModal = (): void => {
            setVisible(true);
        };

        const handleTransitionEnd = (): void => {
            if (!isVisible) {
                closeModal();
            }
        };
        return isOpened ? (
            <div className={wrapperClasses}>
                <div className={backdropClasses} onClick={closeModal} />
                <div
                    className={modalClasses}
                    onTransitionEnd={handleTransitionEnd}
                    data-testid={testId}
                >
                    <div className="relative px-20 py-5 font-bold text-black">
                        {title && (
                            <h2
                                data-testid={`modal-heading`}
                                className={`text-22 sm:text-26 font-semibold tracking-3 text-black`}
                            >
                                {title}
                            </h2>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        ) : null;
    }
);
export default Modal;
