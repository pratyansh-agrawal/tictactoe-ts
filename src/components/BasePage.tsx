import React, { useState, useEffect } from "react";
import { BoxGrid } from "./BoxGrid";
import { WidgetBar } from "./WidgetBar";
import Modal from "./Modal";
export interface WinnerModalProps {
    state: boolean;
    winner: number | null;
}

export const BasePage = () => {


    const [stepNumber, setStepNumber] = useState<number>(0);
    const [isReset, setIsReset] = useState<boolean>(false);
    const [shouldShowWinnerModal, setShouldShowWinnerModal] = useState<WinnerModalProps>({ state: false, winner: null });

    useEffect(() => {
        setStepNumber(1);
        setIsReset(false);
    }, [isReset]);

    return (
        <div className="h-screen w-screen bg-yellow-400">
            <div className="flex flex-col pt-20 h-full w-full">
                <div className="text-white font-bold text-4xl text-center mb-12">
                    Tic-Tac-Toe
                </div>

                <div className="max-h-400p self-center mb-12">
                    <BoxGrid
                        stepNumber={stepNumber}
                        setStepNumber={setStepNumber}
                        isReset={isReset}
                        setShouldShowWinnerModal={setShouldShowWinnerModal}
                    />
                </div>

                <div className="self-center">
                    <WidgetBar setIsReset={setIsReset} />
                </div>
            </div>
            <div className="center">
                {shouldShowWinnerModal.state && <Modal
                    title={shouldShowWinnerModal.winner ? "WINNERRR" : "MATCH TIED"}
                    ref={undefined}
                    onClose={() => setShouldShowWinnerModal({ state: false, winner: null })}
                    isOpened={shouldShowWinnerModal.state}
                >
                    {"sample"}
                </Modal>}
            </div>
        </div>
    );
};
