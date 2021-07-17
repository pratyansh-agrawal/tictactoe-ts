import React, { useEffect, useState } from "react";
import { GiCrossMark, GiCircleClaws } from "react-icons/gi";

interface BoxGridProps {
    stepNumber: number;
    setStepNumber: (counter: number) => void;
    isReset: boolean;
    setShouldShowWinnerModal: (props: { state: boolean, winner: number | null }) => void;
}

interface BoxProps {
    index: number
}

export const BoxGrid: React.FC<BoxGridProps> = ({
    stepNumber,
    setStepNumber,
    isReset,
    setShouldShowWinnerModal
}: BoxGridProps) => {

    useEffect(() => {
        setValues(Array(9).fill(0));
        setIsGameComplete(false);
    }, [isReset]);

    const EmptyBox: React.FC = () => {
        return <div className="bg-gray-200"></div>;
    }

    const CrossIcon: React.FC = () => {
        return <div className="p-2 text-yellow-400">
            <GiCrossMark className="h-full w-full" />
        </div>;
    }

    const CircleIcon: React.FC = () => {
        return <div className="p-2 h-full w-full text-yellow-400">
            <GiCircleClaws className="h-full w-full" />
        </div>;
    }
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const [values, setValues] = useState<number[]>(Array(9).fill(0));
    const [isGameComplete, setIsGameComplete] = useState<boolean>(false);


    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const checkForWinner = () => {
        console.log(stepNumber,);
        console.log("Values",values);
        for (let i = 0; i < winCombinations.length; i++) {
            let line = winCombinations[i];
            const [indexA, indexB, indexC]: number[] = line;
            const markValue = values[indexA];

            if (markValue && markValue === values[indexB] && markValue === values[indexC]) {
                //Winner Winner Chicken Dinner

                setShouldShowWinnerModal({state: true, winner: markValue});
                setIsGameComplete(true);
            }
        }
    };

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <EmptyBox />;
            case 1: return <CrossIcon />;
            case 2: return <CircleIcon />;
        }
    }


    const setBoxValue = (index: number) => {
        let tempArr = values;
        tempArr[index] = stepNumber % 2 === 0 ? 2 : 1;
        setValues(tempArr);
    };

    const Box: React.FC<BoxProps> = ({ index }: BoxProps) => {
        return (
            <div
                className="bg-white h-20 w-20 shadow-lg"
                onClick={() => {
                    if (values[index] === 0 && !isGameComplete) {
                        console.log("clicked", stepNumber);
                        setBoxValue(index);
                        setShowIcon(true);
                        setStepNumber(stepNumber + 1);
                        checkForWinner();
                    }
                    if (stepNumber >= 9) {
                        setShouldShowWinnerModal({state: true, winner: null});
                        setIsGameComplete(true);
                    }
                }}

            >
                {showIcon && getIcon(values[index])}
            </div>
        );
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
            {[...Array(9)].map((x, index) => (
                <div key={`box-${index}`}>
                    <Box index={index} />
                </div>
            ))}
        </div>
    );
};
