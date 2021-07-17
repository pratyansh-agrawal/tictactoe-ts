import React, { useState, useEffect } from "react";
import { BoxGrid } from "./BoxGrid";
import { WidgetBar } from "./WidgetBar";

export const BasePage = () => {
    

    const [stepNumber, setStepNumber] = useState<number>(0);
    const [isReset, setIsReset] = useState<boolean>(false);
    const [shouldShowWinnerModal, setShouldShowWinnerModal] = useState<boolean>(false);

    useEffect(() => {
        setStepNumber(1);
        setIsReset(false);
    }, [isReset]);

    return (
        <div className="h-screen w-screen bg-yellow-400">
            <div className="flex flex-col pt-20 center h-full w-full">
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
        </div>
    );
};
