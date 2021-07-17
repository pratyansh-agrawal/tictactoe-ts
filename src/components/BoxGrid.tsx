import React, { useEffect, useState } from "react";
import { GiCrossMark, GiCircleClaws } from "react-icons/gi";

interface BoxGridProps {
    stepNumber: number;
    setStepNumber: (counter: number) => void;
    isReset: boolean;
    setShouldShowWinnerModal: (flag: boolean) => void;
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
    },[isReset]);

    const EmptyBox: React.FC = () => {
        return <div className="bg-gray-200"></div>;
    }

    const CrossIcon: React.FC = () => {
        return <div className="p-2 text-yellow-400">
            <GiCrossMark className="h-full w-full"/>
        </div>;
    }

    const CircleIcon: React.FC = () => {
        return <div className="p-2 h-full w-full text-yellow-400">
            <GiCircleClaws className="h-full w-full"/>
        </div>;
    }
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const [values, setValues] = useState<number[]>(Array(9).fill(0));


    const winCombonations = ["012","345","678","036","147","258","048","246"];
    const checkForWinner = () => {
        //check if value 1 or value 2 makes falls in the win combinations
        console.log(winCombonations);
        setShouldShowWinnerModal(true);
    };

    const getIcon = (index: number) => {
        switch(index) {
            case 0: return <EmptyBox />;
            case 1: return <CrossIcon />;
            case 2: return <CircleIcon />;
        }
    }


    const setBoxValue = (index: number) => {
        let tempArr = [...values];
        tempArr[index] = stepNumber%2===0 ? 2 : 1;
        setValues([...tempArr ]);
    };

    const Box: React.FC<BoxProps> = ({ index }: BoxProps) => {
        return (
            <div
                className="bg-white h-20 w-20 shadow-lg"
                onClick={() => {
                    console.log(values);
                    if(values[index] === 0){
                        console.log("clicked",stepNumber);
                        setBoxValue(index);
                        setShowIcon(true);
                        setStepNumber(stepNumber + 1);
                        checkForWinner();
                    }
                    if(stepNumber >= 9) {

                    }
                }}
                
            >
                {showIcon && getIcon(values[index])}
            </div>
        );
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
            {[...Array(9)].map((x,index) => (
                <div key={`box-${index}`}>
                    <Box index={index} />
                </div>
            ))}
        </div>
    );
};
